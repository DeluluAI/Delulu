'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { CheckIcon, ChevronDownIcon, MoveLeft } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { industries } from './industries'

export default function CompanyProfileFormComponent() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        industry: '',
        numberOfEmployees: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
        },
        contactInfo: {
            phone: '',
            email: '',
        },
    })

    const [open, setOpen] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value,
            },
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form data:', formData)
        router.push('/register/informacion-fiscal')
    }

    const selectedIndustry = industries.flatMap(category => category.items).find(item => item.value === formData.industry)

    return (
        <div className='my-10 pb-10'>
            <Button
                variant="outline"
                className="text-sm mb-8"
                onClick={() => router.push('/')}
            >
                <MoveLeft /> Regresar al inicio
            </Button>

            <form onSubmit={handleSubmit} className="md:w-[42rem] max-w-[64rem] space-y-4 mt-8 mb-10">
                <h2 className="text-2xl font-bold text-center text-purple-600">Configura el perfil de tu empresa</h2>
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre comercial</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Si aún no lo tienes, usa tu nombre completo"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Giro</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between"
                            >
                                {selectedIndustry ? selectedIndustry.label : 'Selecciona una industria'}
                                <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                            <Command>
                                <CommandInput placeholder="Escribe el nombre de la industria" />
                                <CommandList>
                                    <CommandEmpty>No se encontraron resultados.</CommandEmpty>
                                    {industries.map((industry) => (
                                        <CommandGroup key={industry.value} heading={industry.label}>
                                            {industry.items.map((item) => (
                                                <CommandItem
                                                    key={item.value}
                                                    onSelect={() => {
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            industry: item.value,
                                                        }))
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <CheckIcon
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            formData.industry === item.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {item.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    ))}
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="numberOfEmployees">Número de empleados</Label>
                    <Input
                        id="numberOfEmployees"
                        name="numberOfEmployees"
                        type="number"
                        value={formData.numberOfEmployees}
                        onChange={handleInputChange}
                        placeholder="Opcional"
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Dirección</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="street">Calle</Label>
                            <Input
                                id="street"
                                name="street"
                                value={formData.address.street}
                                onChange={handleAddressChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="city">Ciudad</Label>
                            <Input
                                id="city"
                                name="city"
                                value={formData.address.city}
                                onChange={handleAddressChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="state">Estado</Label>
                            <Input
                                id="state"
                                name="state"
                                value={formData.address.state}
                                onChange={handleAddressChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="postalCode">Código Postal</Label>
                            <Input
                                id="postalCode"
                                name="postalCode"
                                value={formData.address.postalCode}
                                onChange={handleAddressChange}
                                required
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="country">País</Label>
                            <Input
                                id="country"
                                name="country"
                                value={formData.address.country}
                                onChange={handleAddressChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    className={cn(
                        'block mx-auto',
                        'mt-4 w-full p-2 text-center text-sm rounded-md transition-colors duration-300 ease-in-out',
                        'bg-gray-950 text-white hover:bg-blue-600'
                    )}
                    onClick={handleSubmit}
                >
                    Continuar
                </Button>
            </form>
        </div>

    )
}