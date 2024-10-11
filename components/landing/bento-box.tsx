import Image from "next/image";
export function BentoBox() {
    const features = {
        'funnel': {
            title: 'Funnel',
            description: 'Resumen de la conversación',
            image: '/landing/extraction.png'
        },
        'sentiment': {
            title: 'Sentiment Analysis',
            description: 'Análisis de sentimiento',
            image: '/landing/sentiment-analysis.png'
        },
        'encryption': {
            title: 'Encryption',
            description: 'Encriptación de datos',
            image: '/landing/lock.png'
        },
        'integration': {
            title: 'Integration',
            description: 'Integración con otros sistemas',
            image: '/landing/integration.png'
        },
        'reporting': {
            title: 'Reporting',
            description: 'Generación de reportes',
            image: '/landing/reporting.png'
        },
        'detection': {
            title: 'Detection',
            description: 'Detección de fraudes',
            image: '/landing/detection.png'
        },
        'ai': {
            title: 'AI',
            description: 'Inteligencia Artificial',
            image: '/landing/summary.png'
        }
    }


    return (
        <div className="flex flex-col justify-center md:w-full">
            {/*Funnel & Resumen*/}
            <div className="flex">
                <div className="w-4/6">
                    <BoxElement title={features.funnel.title} description={features.funnel.description} image={features.funnel.image} />
                </div>
                <div className="w-2/6">
                    <BoxElement title={features.ai.title} description={features.ai.description} image={features.ai.image} />
                </div>
            </div>
            {/*Sentimemnt Analisis & Encriptacion */}
            <div className="flex">
                <div className="w-1/2">
                    <BoxElement title={features.encryption.title} description={features.encryption.description} image={features.encryption.image} />
                </div>
                <div className="w-1/2">
                    <BoxElement title={features.integration.title} description={features.integration.description} image={features.integration.image} />
                </div>
            </div>
            {/* Reportes, Deteccion, & Integracion */}
            <div className="flex">
                <div className="w-1/2">Column 1, Row 2</div>
                <div className="w-1/2">Column 2, Row 2</div>
            </div>
        </div>
    );
}


function BoxElement({ title, description, image }: { title: string, description: string, image: string }) {
    return (
        <div className="w-1/2">
            <h1>{title}</h1>
            <p>{description}</p>
            {image && <Image src={image} alt={title} width={700} height={500} />}
        </div>
    )
}



