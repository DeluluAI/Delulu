import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Nav() {
    return (
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">
            Delulu
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/productos" className="text-gray-600 hover:text-gray-900">Productos</Link>
            <Link href="/soluciones" className="text-gray-600 hover:text-gray-900">Soluciones</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Login</Button>
          <Button variant="default">Sign Up</Button>
        </div>
      </header>
    )
}