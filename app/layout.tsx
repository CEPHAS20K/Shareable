import './global.css'

import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export const metadata = {
  title: 'flexible',
  description: 'Showcase my development progress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
        {children}
        </main>
        < Footer />
        </body>
    </html>
  )
}
