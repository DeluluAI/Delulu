'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Check, MoveLeft } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { id: 'step-1', name: 'Personal Information' },
  { id: 'step-2', name: 'Contact Details' },
  { id: 'step-3', name: 'Preferences' },
  { id: 'step-4', name: 'Review' },
]

export function MultiStepFormComponent() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  return (
    <div className="w-full mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left sidebar */}
        <aside className="md:w-64 flex-none bg-slate-100">
          <ol className="space-y-2">
            {steps.map((step, index) => (
              <li key={step.id} className="flex items-center justify-start gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium m-2",
                    index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border"
                  )}
                >
                  {index + 1}
                </div>
                <span
                  className={cn(
                    "text-sm font-medium",
                    index <= currentStep ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.name}
                </span>
              </li>
            ))}
          </ol>
        </aside>

        {/* Right content area */}
        <div className=" flex flex-grow justify-center ">
          <div className="space-y-6 ">
            {currentStep === 0 && <Step1 />}
            {currentStep === 1 && <Step2 />}
            {currentStep === 2 && <Step3 />}
            {currentStep === 3 && <Step4 />}

            <div className="flex justify-between">
              <Button onClick={prevStep}  className={`${currentStep === 0 ? 'invisible' : 'visible' }`} disabled={currentStep === 0} variant="outline">
                Previous
              </Button>
              <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Step1() {
  return (
    <div className="space-y-4 ">
      <Button variant="outline" className='text-sm'> <MoveLeft /> Regresar al inicio </Button>
      <h2 className="text-2xl font-bold text-center">Crea tu cuenta</h2>
      <p className='text-lg text-center text-gray-500'>Este será tu acceso a todos los servicios de la plataforma Delulu</p>
      <div className="space-y-2">
        <Label htmlFor="email">Correo Electronico</Label>
        <Input id="email" placeholder="Correo Electronico" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="emailConfirm">Confirma tu correo electronico</Label>
        <Input id="emailConfirm" placeholder="Correo Electronico" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input id="password" type="password" placeholder='Contraseña' />
      </div>
      <p className='text-gray-500 text-sm'>Tu contraseña debe incluir:</p>
      <div className='flex gap-8 justify-between'>
        <ul>
          <li className='flex text-sm text-gray-600 items-center'> <Check className='mr-2' /> Entre 8 y 16 caracteres</li>
          <li className='flex text-sm text-gray-600 items-center'> <Check className='mr-2' /> Mayúsculas y minúsculas</li>
        </ul>
        <ul>
          <li className='flex text-sm text-gray-600 items-center'> <Check className='mr-2' /> Un número</li>
          <li className='flex text-sm text-gray-600 items-center'> <Check className='mr-2' /> Un caracter especial</li>
        </ul>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row'>
          <Input type='checkbox' id='terms' className='w-4 h-4 mr-4' />
          <Label htmlFor='terms'>Acepto los <Link href='#' className='text-blue-600 underline'> Términos, Condiciones</Link> y el <Link href='#' className='text-blue-600 underline'> Aviso de Privacidad para Clientes y Prospectos </Link> de Delulu</Label>
        </div>
        <div className='flex flex-row'>
          <Input type='checkbox' id='marketing' className='w-4 h-4 mr-4' />
          <Label htmlFor='marketing'>Autorizo que Delulu me envíe publicidad y comunicados a través de correo y otros medios</Label>
        </div>
      </div>
    </div>
  )
}

function Step2() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Contact Details</h2>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
      </div>
    </div>
  )
}

function Step3() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Preferences</h2>
      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <RadioGroup defaultValue="email">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone">Phone</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="comments">Additional Comments</Label>
        <Textarea id="comments" placeholder="Any additional information..." />
      </div>
    </div>
  )
}

function Step4() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review</h2>
      <p>Please review your information before submitting:</p>
      {/* In a real application, you would display the collected information here */}
      <div className="p-4 bg-muted rounded-lg">
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Preferred Contact: Email</p>
      </div>
    </div>
  )
}