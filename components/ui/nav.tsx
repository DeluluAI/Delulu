'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavComponent() {
    const NavItems: { title: string; href: string; description: string }[] = [
        {
            title: "Blog",
            href: "/docs/primitives/alert-dialog",
            description:
                "Descubre las mejores formas de administrar tu dinero y tus impuestos.",
        },
        {
            title: "FAQs",
            href: "/docs/primitives/hover-card",
            description:
                "Resuelve tus dudas acerca de tus impuestos y tu contabilidad.",
        },
        {
            title: "Noticias",
            href: "/docs/primitives/progress",
            description:
                "Enterate de todo el progreso que hemos tenido en los últimos meses.",
        },
        {
            title: "Ultimos cambios en la ley",
            href: "/docs/primitives/scroll-area",
            description: "Conoce los últimos cambios en la ley de impuestos en México.",
        },
        {
            title: "Calculadoras",
            href: "/docs/primitives/tabs",
            description:
                "Calcula tus impuestos de forma sencilla y sin complicaciones.",
        },
        {
            title: "Nosotros",
            href: "/docs/primitives/tooltip",
            description:
                "Una vista más a fondo de Impuesto Sencillo y de nuestro equipo.",
        },
    ];
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
                                <Link href="/login" className="text-gray-600 hover:text-gray-900 justify-start">Iniciar Sesión</Link>
                                <Link href="/register" className="text-gray-600 hover:text-gray-900 justify-start">Registrarse</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/login" className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md transition-colors duration-300 border-[1px] border-gray-300 hover:border-gray-400 justify-start">Iniciar Sesión</Link>
                    <Link href="/register" className="text-white bg-black px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-600 justify-start">Registrarse</Link>
                </div>
            </div>
        </header>
    )
}