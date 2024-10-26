'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarIcon, X, MoveLeft } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'

export default function FiscalDataFormComponent() {
    const router = useRouter()
    const [rfc, setRfc] = useState('')
    const [confirmRfc, setConfirmRfc] = useState('')
    const [date, setDate] = useState<Date>()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', { rfc, confirmRfc })
        // Add your form submission logic here
    }

    const handleCalculateRfc = () => {
        if (date) {
            // This is a placeholder for RFC calculation logic
            const calculatedRfc = `RFC${format(date, 'yyMMdd')}`
            setRfc(calculatedRfc)
            setConfirmRfc(calculatedRfc)
            setIsModalOpen(false)
        }
    }

    return (
        <div className='my-10'>
            <Button
                variant="outline"
                className="text-sm mb-8"
                onClick={() => router.push('/')}
            >
                <MoveLeft /> Regresar al inicio
            </Button>
            <form onSubmit={handleSubmit} className="md:w-[42rem] max-w-[64rem] space-y-4 mt-8 mb-10">
                <h2 className="text-2xl font-bold text-center text-purple-600">Datos fiscales de tu empresa</h2>

                <div className="space-y-2">
                    <Label htmlFor="rfc">RFC con homoclave</Label>
                    <Input
                        id="rfc"
                        value={rfc}
                        onChange={(e) => setRfc(e.target.value)}
                        placeholder="Utilizar el RFC con el que emites facturas a tu empresa"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmRfc">Confirma el RFC</Label>
                    <Input
                        id="confirmRfc"
                        value={confirmRfc}
                        onChange={(e) => setConfirmRfc(e.target.value)}
                        required
                    />
                </div>

                <Button type="submit" className="w-full">
                    Continuar
                </Button>

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <Button variant="link" className="w-full text-purple-600">
                            No tengo mi RFC a la mano
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="text-center text-purple-600">Calcularemos tu RFC</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="dob">Selecciona tu fecha de nacimiento</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Fecha de nacimiento</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <Button onClick={handleCalculateRfc} className="w-full">
                                Calcular
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </form>
        </div>
    )
}