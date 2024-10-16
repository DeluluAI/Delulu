'use client'
import Link from "next/link"
export function HeroSectionComponent() {
  return (
    <div className="bg-white">
      

      <main className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
        <span className="mr-2">🎁</span> Comienza tu prueba gratuita de 5 días 
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Transforma Interacciones en Insights con IA
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Convierte conversaciones y encuentros físicos en información clave para mejorar la experiencia del cliente y optimizar tus operaciones.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="https://calendly.com/david-delulu/30min" className="bg-black text-white px-6 py-3 rounded-lg text-lg border-2 hover:bg-white hover:border-gray-200 hover:border-2 hover:text-black transition-colors duration-300">Agenda Una Demo</Link>
          <Link href="/auth" className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300">Comienza tu prueba gratuita</Link>
        </div>
      </main>
    </div>
  )
}