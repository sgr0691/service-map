'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-10 items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 items-start">
            <Link href="/" className="font-bold text-xl">
              <Image 
                src="/placeholder-logo.svg" 
                alt="Logo" 
                className="h-8 w-auto"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="hidden sm:space-x-8 sm:flex">
            <Link 
              href="/" 
              className={`px-3 py-2 ${
                pathname === '/' 
                  ? 'text-blue-700 font-medium bg-blue-50 rounded-md' 
                  : 'hover:text-gray-600'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/alerts" 
              className={`px-3 py-2 ${
                pathname === '/alerts' 
                  ? 'text-blue-600 font-medium bg-blue-50 rounded-md' 
                  : 'hover:text-gray-600'
              }`}
            >
              Alerts
            </Link>
            <Link 
              href="/services" 
              className={`px-3 py-2 ${
                pathname === '/services' 
                  ? 'text-blue-600 font-medium bg-blue-50 rounded-md' 
                  : 'hover:text-gray-600'
              }`}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
