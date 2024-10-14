'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavComponent() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => setIsOpen(!isOpen)

    return (
        <header className="container mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
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
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" onClick={toggleDrawer}>
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="w-full sm:w-[300px]">
                            <nav className="flex flex-col space-y-4 mt-6">
                                <Link href="/productos" className="text-gray-600 hover:text-gray-900">Productos</Link>
                                <Link href="/soluciones" className="text-gray-600 hover:text-gray-900">Soluciones</Link>
                                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
                                <Link href="/nosotros" className="text-gray-600 hover:text-gray-900">Sobre Delulu</Link>
                                <Link href="/contacto" className="text-gray-600 hover:text-gray-900">Contacto</Link>
                                <Button variant="ghost" className="justify-start">Iniciar Sesión</Button>
                                <Button variant="default" className="justify-start">Registrarse</Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Button variant="ghost">Iniciar Sesión</Button>
                    <Button variant="default">Registrarse</Button>
                </div>
            </div>
        </header>
    )
}