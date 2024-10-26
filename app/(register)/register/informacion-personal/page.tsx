'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

export default function PersonalDataForm() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [firstLastName, setFirstLastName] = useState('')
    const [secondLastName, setSecondLastName] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', { name, firstLastName, secondLastName, countryCode, phone })
    }

    return (
        <div className="max-w-[64rem] space-y-4 mt-8">
            <Button
                variant="outline"
                className="text-sm mb-8"
                onClick={() => router.push('/')}
            >
                <MoveLeft /> Regresar al inicio
            </Button>
            <h2 className="text-2xl font-bold text-center">Datos personales del solicitante</h2>
            <p className="text-lg text-center text-gray-500">
                Te enviaremos un código para la verificacion de cuenta a través de SMS
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                        id="name"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstLastName">Primer Apellido</Label>
                        <Input
                            id="firstLastName"
                            placeholder="Primer Apellido"
                            value={firstLastName}
                            onChange={(e) => setFirstLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="secondLastName">Segundo Apellido</Label>
                        <Input
                            id="secondLastName"
                            placeholder="Segundo Apellido"
                            value={secondLastName}
                            onChange={(e) => setSecondLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="countryCode">Código de País</Label>
                        <Select onValueChange={setCountryCode} value={countryCode}>
                            <SelectTrigger id="countryCode">
                                <SelectValue placeholder="Seleccionar" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="+52">+52 (México)</SelectItem>
                                <SelectItem value="+1">+1 (USA/Canada)</SelectItem>
                                <SelectItem value="+34">+34 (España)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                            id="phone"
                            placeholder="Teléfono"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <Button
                        type="submit"
                        className={cn(
                            'mt-4 w-64 p-2 text-center text-sm rounded-md transition-colors duration-300 ease-in-out',
                            'bg-gray-950 text-white hover:bg-blue-600'
                        )}
                        onClick={() => router.push('/register/codigo-de-verificacion')}
                    >
                        Crear mi cuenta
                    </Button>
                </div>
                <div className="flex flex-row justify-center">
                    <p className="text-gray-500 text-center">
                        Cuando des click en 'Crear cuenta', te enviaremos un código de un solo uso para verificar tu celular. *Pueden aplicar tarifas por mensajes y datos*. Consulta nuestros
                        <Link href="/terminos-condiciones" className="text-blue-500 underline mx-2 hover:text-blue-800">Términos, Condiciones</Link>
                        y
                        <Link href='/aviso-de-privacidad' className="text-blue-500 underline mx-2 hover:text-blue-800">Aviso de Privacidad para Clientes y Prospectos.</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}