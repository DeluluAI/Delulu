'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"

export default function PhoneVerificationForm() {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const router = useRouter()

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6)
    }, [])

    const handleChange = (index: number, value: string) => {
        if (value.length <= 1) {
            const newCode = [...verificationCode]
            newCode[index] = value
            setVerificationCode(newCode)

            // Move to next input if value is entered
            if (value !== '' && index < 5) {
                inputRefs.current[index + 1]?.focus()
            }
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const code = verificationCode.join('')
        console.log('Submitted code:', code)
        // Add your verification logic here
        router.push('/register/informacion-de-compania')
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
            <h2 className="text-3xl font-bold text-center">Código de verificación</h2>
            <p className="text-center text-gray-600">
                Acabamos de enviarlo al +52 (921) ***-**32
            </p>
            <p className="text-center text-gray-600">
                ¿Número equivocado? <Link href="#" className="text-blue-600 hover:underline">Edítalo aquí</Link>
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between">
                    {verificationCode.map((digit, index) => (
                        <Input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => { inputRefs.current[index] = el; }}
                            className={`w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-600`}
                        />
                    ))}
                </div>
                <p className="text-center text-gray-600">
                    ¿No te llegó el código? <Link href="#" className="text-blue-600 hover:underline">Recíbelo por WhatsApp</Link>
                </p>
                <Button
                    type="submit"
                    className={cn(
                        'block mx-auto',
                        'mt-4 w-64 p-2 text-center text-sm rounded-md transition-colors duration-300 ease-in-out',
                        'bg-gray-950 text-white hover:bg-blue-600'
                    )}
                    onClick={handleSubmit}
                >
                    Validar código
                </Button>
            </form>
        </div>
    )
}
