'use client'

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const products = [
  {
    title: "Análisis de Audio",
    href: "/products/audio-analysis",
    description: "Analiza contenido de audio con técnicas avanzadas de IA.",
  },
  {
    title: "Análisis de Sentimientos",
    href: "/products/sentiment-analysis",
    description: "Comprende el sentimiento detrás del texto y el habla.",
  },
  {
    title: "Detección de Intereses",
    href: "/products/interest-detection",
    description: "Detecta y analiza los intereses de los usuarios a partir de diversas fuentes de datos.",
  },
  {
    title: "Retroalimentación Continua",
    href: "/products/continuous-feedback",
    description: "Implementa ciclos de retroalimentación continua en tus aplicaciones.",
  },
]

const solutions = [
  {
    title: "Soluciones de Audio",
    href: "/solutions/audio",
    description: "Soluciones integrales de procesamiento y análisis de audio.",
  },
  {
    title: "Soluciones de Video",
    href: "/solutions/video",
    description: "Capacidades avanzadas de análisis y procesamiento de video.",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function NavMenu() {
  return (
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="text-3xl font-bold">
          Delulu
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Explora Nuestros Productos
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Descubre cómo nuestras soluciones potenciadas por IA pueden transformar tu negocio.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {products.map((product) => (
                      <ListItem
                        key={product.title}
                        title={product.title}
                        href={product.href}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Soluciones</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution) => (
                      <ListItem
                        key={solution.title}
                        title={solution.title}
                        href={solution.href}
                      >
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className=" hover:text-gray-400 transition-colors ease-in-out duration-300">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/help" legacyBehavior passHref>
                  <NavigationMenuLink className=" hover:text-gray-400 transition-colors ease-in-out duration-300">
                    Ayuda
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex items-center space-x-4">
        <Link href="/register/email" className="bg-white text-black border-[1px] px-4 py-2 rounded-md hover:bg-slate-100 transition-colors ease-in-out duration-300">
            Iniciar Sesión
          </Link>
          <Link href="/login" className="bg-black text-white border-[1px] px-4 py-2 rounded-md hover:bg-slate-100 hover:text-black transition-colors ease-in-out duration-300">
            Registrarse
          </Link>
          
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Productos</h3>
                <Link href="/products/audio-analysis" className="text-md font-medium">
                  Análisis de Audio
                </Link>
                <Link href="/products/sentiment-analysis" className="text-md font-medium">
                  Análisis de Sentimientos
                </Link>
                <Link href="/products/interest-detection" className="text-md font-medium">
                  Detección de Intereses
                </Link>
                <Link href="/products/continuous-feedback" className="text-md font-medium">
                  Retroalimentación Continua
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Soluciones</h3>
                <Link href="/solutions/audio" className="text-md font-medium">
                  Soluciones de Audio
                </Link>
                <Link href="/solutions/video" className="text-md font-medium">
                  Soluciones de Video
                </Link>
              </div>
              <Link href="/blog" className="text-lg font-semibold  hover:text-gray-400 transition-colors ease-in-out duration-300">
                Blog
              </Link>
              <Link href="/help" className="text-lg font-semibold hover:text-gray-400 transition-colors ease-in-out duration-300">
                Ayuda
              </Link>
              
              <Link href="/register/email" className="bg-white text-black border-[1px] px-4 py-2 rounded-md hover:bg-slate-100 transition-colors ease-in-out duration-300 text-center">
                Iniciar Sesión
              </Link>
              <Link href="/login" className="bg-black text-white border-[1px] px-4 py-2 rounded-md hover:bg-slate-100 hover:text-black transition-colors ease-in-out duration-300 text-center">
                Registrarse
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}
