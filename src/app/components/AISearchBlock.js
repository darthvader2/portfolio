"use client";

import { useState } from "react";

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function splitCompleteWordTokens(buffer) {
  const tokens = [];
  const tokenRegex = /\S+\s*/g;
  let match;
  let consumedIndex = 0;

  while ((match = tokenRegex.exec(buffer)) !== null) {
    const token = match[0];
    const endIndex = match.index + token.length;
    const endsWithWhitespace = /\s$/.test(token);

    if (endIndex < buffer.length || endsWithWhitespace) {
      tokens.push(token);
      consumedIndex = endIndex;
    }
  }

  return {
    tokens,
    remaining: buffer.slice(consumedIndex)
  };
}

export default function AISearchBlock() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setError("Please enter a question first.");
      return;
    }

    setIsLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: trimmedQuery })
      });

      if (!response.ok) {
        let errorMessage = "Unable to get a response from the AI backend.";

        try {
          const errorData = await response.json();
          errorMessage = errorData?.error || errorMessage;
        } catch {
          const rawError = await response.text();
          if (rawError) {
            errorMessage = rawError;
          }
        }

        throw new Error(errorMessage);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        const fallbackText = await response.text();
        setAnswer(fallbackText || "No answer generated.");
        return;
      }

      const decoder = new TextDecoder();
      let chunkBuffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        chunkBuffer += decoder.decode(value, { stream: true });
        const { tokens, remaining } = splitCompleteWordTokens(chunkBuffer);
        chunkBuffer = remaining;

        for (const token of tokens) {
          setAnswer((current) => current + token);
          await delay(22);
        }
      }

      if (chunkBuffer) {
        setAnswer((current) => current + chunkBuffer);
      }
    } catch (requestError) {
      setError(requestError.message || "Something went wrong while fetching the answer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="ai-search-block" aria-label="AI chat">
      <div className="ai-search-shell">
        <form onSubmit={handleAsk} className="ai-search-form">
          <input
            type="text"
            className="ai-search-input"
            placeholder="Ask me something"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Ask AI"
          />
        </form>
      </div>

      {error ? <p className="ai-error">{error}</p> : null}

      <div className="ai-answer-panel" aria-live="polite">
        <p className="ai-answer-text">{answer || (isLoading ? "Thinking..." : "")}</p>
      </div>
    </section>
  );
}
