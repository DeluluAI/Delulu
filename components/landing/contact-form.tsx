"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactFormComponent() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ email: '', fullName: '', phoneNumber: '', message: '' })
  }

  return (
    <div className="w-full flex justify-center mt-16">
      <div className="bg-[#1b1b1b] dark:bg-white/[.06] text-white p-8 md:p-16 rounded-lg w-3/4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              Convierte cada interacción en información valiosa para mejorar la experiencia de tus clientes de forma personalizada.
            </h2>
            <Button variant="outline" className="mt-4 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-white/[.06] text-lg p-5">
              Agenda una demo
            </Button>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Completa tus datos para conocer más</h3>
              <Input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className='bg-slate-100 border-slate-400 dark:bg-white/[.06] dark:border-slate-600 text-black'
              />
              <Input
                type="text"
                name="fullName"
                placeholder="Nombre completo"
                value={formData.fullName}
                onChange={handleChange}
                required
                className='bg-slate-100 border-slate-400 dark:bg-white/[.06] dark:border-slate-600 text-black'
              />
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Numero de teléfono"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className='bg-slate-100 border-slate-400 dark:bg-white/[.06] dark:border-slate-600 text-black'
              />
              <Textarea
                name="message"
                placeholder="Cuéntanos más de ti y como podemos ayudarte a mejorar la experiencia de tus clientes."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className='bg-slate-100 border-slate-400 dark:bg-white/[.06] dark:border-slate-600 text-black'
              />
              <Button type="submit" className="w-full hover:bg-white/[.08] dark:hover:bg-white/[.06]">
                Quiero que me contacten
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}