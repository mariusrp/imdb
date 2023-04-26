import Header from '@/components/Header'
import Providers from "./Providers"
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* {Header} */}
          <Header/>

          {/* {Navbar} */}

          {/* {SearchBox} */}

          {children}
        </Providers>
      </body>
    </html>
  )
}
