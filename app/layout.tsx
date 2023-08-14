import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Flexibblee',
  description: 'Shrey sadhukhan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
