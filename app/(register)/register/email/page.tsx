'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

export default function EmailForm() {
  const router = useRouter()
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptMarketing, setAcceptMarketing] = useState(false)
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="max-w-[64rem] space-y-4 mt-8">
      <Button
        variant="outline"
        className="text-sm mb-8"
        onClick={() => router.push('/')}
      >
        <MoveLeft /> Regresar al inicio
      </Button>
      <h2 className="text-2xl font-bold text-center">Crea tu cuenta</h2>
      <p className="text-lg text-center text-gray-500">
        Este será tu acceso a todos los servicios de la plataforma Delulu
      </p>
      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input
          id="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="emailConfirm">Confirma tu correo electrónico</Label>
        <Input
          id="emailConfirm"
          placeholder="Correo Electrónico"
          value={emailConfirm}
          onChange={(e) => setEmailConfirm(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className="text-gray-500 text-sm">Tu contraseña debe incluir:</p>
      <div className="flex gap-8 justify-between">
        <ul>
          <li className="flex text-sm text-gray-600 items-center">
            <Check className="mr-2" /> Entre 8 y 16 caracteres
          </li>
          <li className="flex text-sm text-gray-600 items-center">
            <Check className="mr-2" /> Mayúsculas y minúsculas
          </li>
        </ul>
        <ul>
          <li className="flex text-sm text-gray-600 items-center">
            <Check className="mr-2" /> Un número
          </li>
          <li className="flex text-sm text-gray-600 items-center">
            <Check className="mr-2" /> Un carácter especial
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <label htmlFor="terms" className="flex items-start">
          <Input
            type="checkbox"
            id="terms"
            className="w-4 h-4 mr-4 mt-1"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          <span>
            Acepto los{' '}
            <Link href="#" className="text-blue-600 underline">
              Términos, Condiciones
            </Link>{' '}
            y el{' '}
            <Link href="#" className="text-blue-600 underline">
              Aviso de Privacidad para Clientes y Prospectos
            </Link>{' '}
            de Delulu
          </span>
        </label>
        <label htmlFor="marketing" className="flex items-start">
          <Input
            type="checkbox"
            id="marketing"
            className="w-4 h-4 mr-4 mt-1"
            checked={acceptMarketing}
            onChange={() => setAcceptMarketing(!acceptMarketing)}
          />
          <span>
            Autorizo que Delulu me envíe publicidad y comunicados a través de
            correo y otros medios
          </span>
        </label>
        <div className="flex flex-row justify-center">
          <Button
            onClick={() => router.push('/register/informacion-personal')}
            disabled={!acceptTerms}
            className={cn(
              'mt-4 w-64 p-2 text-center text-sm rounded-md transition-colors duration-300 ease-in-out',
              {
                'bg-gray-950 text-white hover:bg-blue-600': acceptTerms,
                'bg-gray-100 text-white cursor-not-allowed': !acceptTerms,
              }
            )}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  )
}
