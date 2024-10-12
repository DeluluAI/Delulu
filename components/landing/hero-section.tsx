'use client'
import { Button } from "@/components/ui/button"

export function HeroSectionComponent() {
  return (
    <div className="bg-white">
      

      <main className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
          Aumentamos tus ventas en un 25%
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Transforma Interacciones en Insights con IA
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Convierte conversaciones y encuentros físicos en información clave para mejorar la experiencia del cliente y optimizar tus operaciones.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Agenda Una Demo</Button>
          <Button variant="outline" size="lg">Descubre más</Button>
        </div>
      </main>
    </div>
  )
}