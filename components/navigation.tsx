import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
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
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="hover:text-gray-600 px-3 py-2">
              Dashboard
            </Link>
            <Link href="/" className="hover:text-gray-600 px-3 py-2">
              Alerts
            </Link>
            <Link href="/" className="hover:text-gray-600 px-3 py-2">
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
