'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Search, Book, Bell, User, MessageCircle, FileText, Video, PresentationIcon, Settings } from 'lucide-react'

const faqCategories = [
  {
    title: "General",
    questions: [
      "¿Cuál es la diferencia entre un contador tradicional y Konta.com?",
      "¿Puedo cancelar mi subscripción en cualquier momento?",
      "¿Cómo se hacen los pagos?",
      "¿La declaración anual está incluida en los pagos mensuales?",
      "¿Dónde se encuentra su equipo contable? ¿Cuáles son sus certificaciones?",
    ]
  },
  {
    title: "Cuenta y configuración",
    questions: [
      "¿Qué incluye mi plan en Konta.com?",
      "¿Cuándo debo de subir mi información a la plataforma?",
      "Genera y sube tus credenciales del SAT a Konta.com",
    ]
  }
]

const helpCenterCategories = [
  { icon: <Book className="h-6 w-6" />, title: "Empieza aquí", description: "Aprende a usar la aplicación y sigue las mejores prácticas para llevar tus impuestos." },
  { icon: <Bell className="h-6 w-6" />, title: "Noticias & actualizaciones", description: "Los últimos lanzamietos, mejores y actualizaciones." },
  { icon: <User className="h-6 w-6" />, title: "Cuenta & configuración", description: "Modifica los ajustes de cuenta e información de pagos." },
  { icon: <MessageCircle className="h-6 w-6" />, title: "Asesoría", description: "Puedes encontrarnos de Lunes a Viernes, de las 9:00am a las 6:00pm." },
  { icon: <FileText className="h-6 w-6" />, title: "Blog", description: "Descubre historias y contenido sobre negocios y emprendimiento." },
  { icon: <PresentationIcon className="h-6 w-6" />, title: "Eventos y Webinars", description: "Únete a los webinars en donde te enseñaremos todo lo necesario para saberle el máximo provecho a la plataforma." },
  { icon: <Settings className="h-6 w-6" />, title: "Herramientas", description: "Agiliza tus procesos contables con calculadoras y herrmientas." },
  { icon: <Video className="h-6 w-6" />, title: "Cursos y videos", description: "Todo lo que necesitas saber sobre llevar tus impuestos y procesos contables." },
]

function Header() {
  return (
    <header className="bg-gradient-to-b from-purple-600 to-transparent text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-4">Bienvenido al centro de ayuda de Delulu</h1>
        <p className="text-xl mb-6">¡Hola! ¿Cómo podemos ayudar?</p>
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar en nuestros artículos"
            className="w-full pl-10 pr-4 py-2 rounded-lg text-black"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </header>
  )
}

function HelpCenterCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {helpCenterCategories.map((category, index) => (
        <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer" onClick={() => {window.location.href = `/faq/${category.title}`}}>
          <CardHeader>
            <CardTitle className="flex items-center">
              {category.icon}
              <span className="ml-2">{category.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{category.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function FAQSection() {
  return (
    <div className="space-y-8">
      {faqCategories.map((category, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {category.questions.map((question, qIndex) => (
              <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                <AccordionTrigger className="text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent>
                  Aquí iría la respuesta a la pregunta. Esta es una respuesta de ejemplo.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}

export function FAQ() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Lo más popular</h2>
        <HelpCenterCategories />
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Empieza aquí</h2>
          <FAQSection />
        </div>
      </main>
    </div>
  )
}