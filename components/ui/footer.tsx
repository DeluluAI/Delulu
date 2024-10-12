import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-black">
              Delulu
              <span className="bg-primary h-1 w-12 block mt-1"></span>
            </Link>
            <p className="mt-2">Copyright © 2024 Every Labs</p>
            <p>All rights reserved</p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div>
              <Link href="/pricing" className="block mb-2 hover:text-primary">Pricing</Link>
              <Link href="/blog" className="block mb-2 hover:text-primary">Blog</Link>
              <Link href="/contact" className="block hover:text-primary">Contact</Link>
            </div>
            <div>
              <Link href="/privacy-policy" className="block mb-2 hover:text-primary">Privacy Policy</Link>
              <Link href="/terms-of-service" className="block mb-2 hover:text-primary">Terms of Service</Link>
              <Link href="/refund-policy" className="block hover:text-primary">Refund Policy</Link>
            </div>
            <div>
              <a href="https://twitter.com/delulu" target="_blank" rel="noopener noreferrer" className="block mb-2 hover:text-primary">Twitter</a>
              <a href="https://linkedin.com/company/delulu" target="_blank" rel="noopener noreferrer" className="block mb-2 hover:text-primary">LinkedIn</a>
              <a href="https://github.com/delulu" target="_blank" rel="noopener noreferrer" className="block hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}