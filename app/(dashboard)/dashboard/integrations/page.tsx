import { LandPlot } from "lucide-react"
export default function IntegrationsPage() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-36">
            <LandPlot className="w-36 h-36 text-gray-400" />
            <h1 className="text-3xl font-bold">Proximamente</h1>
            <p className="text-md text-gray-500 mb-12">Estamos trabajando en integrar tus insights con otras plataformas para que puedas ver todo en un solo lugar.</p>
        </div>
    )
}