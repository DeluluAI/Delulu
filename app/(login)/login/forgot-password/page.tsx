'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpFormComponent() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Manejar la lógica de registro aquí
        console.log("Correo enviado a:", { email })
    }

    return (
        <div className="flex min-h-screen">
            <div className="hidden w-2/3 bg-black text-white flex-col justify-between lg:flex relative">
                <Image
                    src='/blog/3.webp'
                    alt="Dos personas negociando por el precio de un auto"
                    width='0'
                    height='0'
                    sizes="100vw"
                    className="object-cover w-full h-full"
                />
                <div className="w-full h-full absolute bg-black opacity-45 top-0 left-0"></div>
                <div className="absolute top-8 left-8">
                    <Link
                        href='/'
                        className="ml-2 text-3xl font-bold absolute hover:text-gray-200 transition-colors duration-300 ease-out"
                    >
                        Delulu
                    </Link>
                </div>
                <div className="p-8 bottom-0 absolute">
                    <div>
                        <p className="text-lg">&quote;Delulu nos ha ayudado a hacer de nuestra vida mucho más fácil a la hora de trabajar.&quote;</p>
                        <p className="mt-2">Sofia Muñiz</p>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Olvidé mi contraseña</h2>
                        <p className="text-sm text-gray-600 mt-2">Ingresa tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="nombre@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Enviar enlace de restablecimiento
                        </Button>
                    </form>
                    <div className="text-center">
                        <Link href="/login" className="text-sm text-primary hover:underline">
                            Volver al inicio de sesión
                        </Link>
                    </div>
                    <p className="text-center text-sm text-gray-600">
                        Al hacer clic en continuar, aceptas nuestros{" "}
                        <Link href="/terms" className="underline">
                            Términos de Servicio
                        </Link>&quote;
                        y&quote;
                        <Link href="/privacy" className="underline">
                            Política de Privacidad
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
