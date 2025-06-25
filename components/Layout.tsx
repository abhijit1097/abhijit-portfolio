import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#0e0f11] text-white min-h-screen font-sans">
      <header className="w-full py-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Abhijit Mohanty</h1>
          <nav className="space-x-4 text-sm text-gray-400">
            <Link href="#home" className="hover:text-white">Home</Link>
            <Link href="#about" className="hover:text-white">About</Link>
            <Link href="#skills" className="hover:text-white">Skills</Link>
            <Link href="#experience" className="hover:text-white">Experience</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-24">
        {children}
      </main>
    </div>
  )
}
