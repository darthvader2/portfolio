import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Varshith',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="content">
          <header className="header">
            <h1 className="animated-title">Varshith konda</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
