import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Abhijit</h1>
          <nav className="space-x-4 text-sm">
            <Link href="#about" className="hover:text-blue-400">About</Link>
            <Link href="#skills" className="hover:text-blue-400">Skills</Link>
            <Link href="#experience" className="hover:text-blue-400">Experience</Link>
            <Link href="#contact" className="hover:text-blue-400">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4">{children}</main>
    </div>
  )
}
