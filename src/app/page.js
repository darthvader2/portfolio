import AISearchBlock from "./components/AISearchBlock";

export default function Home() {
  return (
    <div>
      <h1>Hello, I'm Varshith</h1>
      <p>
        I'm system developer and devops engineer, working in linkoping university and specifically part AIDA Data hub group. I also collaborate
        on various national level project along with NBIS (National BioInformatics Sweden) and european projects like Bigpicture and EUCAIM
      </p>

      <AISearchBlock />

      <div className="socialdiv">
        <div className="socialglass">
          <div className="social"><a href="https://github.com/darthvader2">Github</a></div>
          <div className="social"><a href="https://www.linkedin.com/in/konda-varshith/">LinkedIn</a></div>
        </div>
      </div>
    </div>
  )
}
