import Image from "next/image";
import { IntegrationsDemo } from "@/components/landing/integrations-demo";
import TopicDetection from "@/components/landing/topicDetection";

export function BentoBox() {
    const features = {
        'funnel': {
            title: 'Seguimiento Inteligente de Resolución y Progreso en tu Funnel Empresarial',
            description: 'Mide el sentimiento de los clientes en tiempo real durante las conversaciones. Identifica emociones positivas, negativas o neutrales, permitiendo ajustar el enfoque del servicio para mejorar la satisfacción del cliente.',
            image: '/landing/extraction.png',
            imageWidth: 700,
            imageHeight: 500
        },
        'sentiment': {
            title: 'Análisis Emocional en Tiempo Real',
            description: 'Mide el sentimiento de los clientes en tiempo real durante las conversaciones. Identifica emociones positivas, negativas o neutrales, permitiendo ajustar el enfoque del servicio para mejorar la satisfacción del cliente.',
            image: '/landing/sentiment-analysis.png',
            imageWidth: 500,
            imageHeight: 150
        },
        'encryption': {
            title: 'Encriptación y Protección de Datos',
            description: 'Protege toda la información recopilada con nuestros avanzados sistemas de encriptación. Delulu garantiza que los datos de tus interacciones de audio y video se mantengan seguros, cumpliendo con los más altos estándares de seguridad empresarial.',
            image: '/landing/lock.png',
            imageWidth: 247,
            imageHeight: 247
        },
        'integration': {
            title: 'Integraciones Flexibles con los Principales CRMs',
            description: 'Delulu se integra fácilmente con los CRMs más populares de la industria, brindándote una solución sin complicaciones para sincronizar tus datos. Además, podemos adaptarnos a los sistemas personalizados de tu empresa, asegurando una implementación perfecta que se ajuste a tus necesidades operativas.',
            component: <IntegrationsDemo />

        },
        'reporting': {
            title: 'Reportes Personalizados de Rendimiento',
            description: 'Genera reportes detallados del rendimiento de cada empleado basado en sus conversaciones con los clientes. Evalúa la efectividad, identifica áreas de mejora y reconoce a los empleados con mejor desempeño.',
        },
        'detection': {
            title: 'Detección Automática de Temas Relevantes',
            description: 'Delulu analiza cada conversación y detecta automáticamente los temas más importantes, proporcionando un mapa claro de las preocupaciones y prioridades de los clientes.',
            component: <TopicDetection />
        },
        'ai': {
            title: 'Resumen Instantáneo de Conversaciones',
            description: 'Genera un resumen automático y conciso de cada interacción, destacando los puntos más relevantes. Facilita la revisión rápida de conversaciones largas, permitiendo a las empresas centrarse en la información clave.',
            image: '/landing/summary.png',
            imageWidth: 490,
            imageHeight: 575
        }
    }


    return (
        <div className="flex flex-col justify-center items-center md:w-full px-24">
            {/*Funnel & Resumen*/}
            <div className="flex border-2 border-black/[.05] dark:border-white/[.06] rounded-lg">
                <div className="w-5/8">
                    <BoxElement title={features.funnel.title} description={features.funnel.description} image={features.funnel.image} imageWidth={features.funnel.imageWidth} imageHeight={features.funnel.imageHeight} />
                </div>
                <div className="w-3/8 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                    <BoxElement title={features.ai.title} description={features.ai.description} image={features.ai.image} imageWidth={features.ai.imageWidth} imageHeight={features.ai.imageHeight} />
                </div>
            </div>
            {/*Sentimemnt Analisis & Encriptacion */}
            <div className="flex border-2 border-black/[.05] dark:border-white/[.06] rounded-lg">
                <div className="w-1/2 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                    <BoxElement title={features.sentiment.title} description={features.sentiment.description} image={features.sentiment.image} imageWidth={features.sentiment.imageWidth} imageHeight={features.sentiment.imageHeight} />
                </div>
                <div className="w-1/2 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                    <BoxElement title={features.encryption.title} description={features.encryption.description} image={features.encryption.image} imageWidth={features.encryption.imageWidth} imageHeight={features.encryption.imageHeight} />
                </div>

            </div>
            {/* Reportes, Deteccion, & Integracion */}
            <div className="flex border-2 border-black/[.05] dark:border-white/[.06] rounded-lg">
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="flex flex-col gap-4 border-b-[1px] border-black/[.05] dark:border-white/[.06]">
                        <BoxElement title={features.reporting.title} description={features.reporting.description} />
                    </div>
                    <div>
                        <BoxElement title={features.detection.title} description={features.detection.description} component={features.detection.component} />
                    </div>
                </div>
                <div className="w-1/2 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                    <BoxElement title={features.integration.title} description={features.integration.description} component={features.integration.component} />

                </div>

            </div>
        </div>
    );
}


function BoxElement({ title, description, image, imageWidth = 700, imageHeight = 500, component }: { title: string, description: string, image?: string, imageWidth?: number, imageHeight?: number, component?: React.ReactNode }) {
    return (
        <div className="w-full p-12 flex flex-col items-center">
            <div className="flex flex-col items-start gap-4">
                <h1 className="w-3/4 text-2xl font-semibold text-[#1B1B1B]">{title}</h1>
                <p className=" w-3/4 text-md font-light text-[#515151]">{description}</p>
            </div>
            {image ? <Image src={image} alt={title} width={imageWidth} height={imageHeight} className="mt-16" /> : null}

            {component ? component : null}
        </div>
    )
}



