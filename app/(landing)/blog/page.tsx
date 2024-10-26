import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


type Article = {
    title: string;
    description: string;
    author?: string;
    image: string;
    isLarge?: boolean;
};

export default function BlogPage() {
    const popularArticles: Article[] = [
        {
            title:
                "Cómo la IA Transforma las Conversaciones con Clientes en Perspectivas Accionables",
            description:
                "Descubre el potencial de la IA en el análisis de interacciones de voz y video, identificando patrones clave y empoderando a las empresas para tomar decisiones basadas en datos.",
            image: "/blog/8.jpg",
            isLarge: true,
        },
        {
            title:
                "Optimización de la Experiencia del Cliente en 2024: Tendencias Clave en IA y CX",
            description:
                "Explora las próximas tendencias en CX potenciadas por IA para 2024, desde el análisis de sentimientos hasta las perspectivas predictivas.",
            image: "/blog/7.jpg",
        },
        {
            title:
                "Estudio de Caso: Incrementando la Satisfacción del Cliente en Concesionarios",
            description:
                "Un análisis detallado de cómo un concesionario automotriz líder utilizó las perspectivas de Delulu para mejorar la calidad del servicio.",
            image: "/blog/6.jpg",
        },
    ];

    const allArticles: Article[] = [
        {
            title: "Comprendiendo el Análisis de Sentimientos",
            description:
                "Aprende cómo funciona la tecnología de análisis de sentimientos y cómo Delulu permite a las empresas optimizar las conversaciones con los clientes.",
            author: "Emily Chen, Científica de Datos",
            image: "/blog/1.webp",
        },
        {
            title: "El Futuro de la IA en las Interacciones con Clientes",
            description:
                "Explora cómo la IA está moldeando el futuro de las interacciones con clientes y qué pueden hacer las empresas para prepararse.",
            author: "Alex Turner, Investigador de IA",
            image: "/blog/2.jpg",
        },
        {
            title: "Construyendo un Equipo Basado en Datos",
            description:
                "Descubre cómo las perspectivas de clientes pueden empoderar a cada miembro del equipo con retroalimentación respaldada por datos.",
            author: "Sarah Brown, Especialista en Recursos Humanos",
            image: "/blog/3.webp",
        },
        {
            title: "Personalizando el Servicio al Cliente con IA",
            description:
                "Aprende cómo la IA puede ayudar a personalizar los viajes de los clientes identificando puntos clave de contacto y oportunidades de mejora.",
            author: "David Lee, Estratega de CX",
            image: "/blog/4.jpg",
        },
        {
            title: "El Auge de la IA en el Servicio al Cliente Automotriz",
            description:
                "Explora cómo la IA está revolucionando el servicio al cliente en la industria automotriz, desde concesionarios hasta fabricantes.",
            author: "Rachel Green, Analista de la Industria Automotriz",
            image: "/blog/5.webp",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <header className="relative h-[60vh] min-h-[400px] bg-slate-900 text-white">
                <Image
                    src="/blog/Cool-Shape.png"
                    objectFit="cover"
                    objectPosition="center"
                    className="absolute"
                    alt="Fondo lleno de figuras de colores radiantes"
                    layout="fill"
                />
                <div className="absolute bg-gradient-to-b from-black to-transparent md:w-full md:h-[480px]"></div>
                <div className="container mx-auto p-12 relative z-10 h-full flex flex-col justify-center">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights con IA: Transformando la Experiencia del Cliente</h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-8">Explorando la intersección de la IA, la experiencia del cliente y la innovación empresarial</p>
                        <div className="flex">
                            <Input placeholder="Buscar artículos..." className="rounded-r-none placeholder:text-white" />
                            <Button type="submit" className="rounded-l-none">
                                <Search className="h-4 w-4 mr-2" />
                                Buscar
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-4 h-16">
                        <Link href="/" className="text-sm font-medium">
                            Inicio
                        </Link>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-500">Blog</span>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-12">
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Artículos Populares</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {popularArticles.map((article, index) =>
                            article.isLarge ? (
                                <PopularArticleLarge key={index} article={article} />
                            ) : (
                                <PopularArticleSmall key={index} article={article} />
                            )
                        )}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Todos los Artículos</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allArticles.map((article, index) => (
                            <ArticleItem key={index} {...article} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

function PopularArticleLarge({ article }: { article: Article }) {
    return (
        <Card className="md:col-span-2">
            <div className="md:flex">
                <div className="md:w-2/3 relative h-64 md:h-auto">
                    <Image
                        src={article.image}
                        alt={article.title}
                        objectFit="cover"
                        className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        layout="fill"
                    />
                </div>
                <div className="md:w-1/3 p-6">
                    <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                    <CardDescription className="mb-4">
                        {article.description}
                    </CardDescription>
                    <Button variant="outline">Leer Más</Button>
                </div>
            </div>
        </Card>
    );
}

// Componente para artículos populares pequeños
function PopularArticleSmall({ article }: { article: Article }) {
    return (
        <Card>
            <div className="flex h-full">
                <div className="w-1/3 relative">
                    <Image
                        src={article.image}
                        alt={article.title}
                        objectFit="cover"
                        className="rounded-l-lg"
                        layout="fill"
                    />
                </div>
                <div className="w-2/3 p-4">
                    <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                    <CardDescription className="text-sm mb-2">
                        {article.description}
                    </CardDescription>
                    <CardFooter className="p-0">
                        <Button variant="link" className="p-0">
                            Leer Más
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    );
}

// Componente para todos los artículos
function ArticleItem({
    title,
    description,
    author,
    image,
}: {
    title: string;
    description: string;
    author?: string;
    image: string;
}) {
    return (
        <Card className="flex flex-col h-full">
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{description}</p>
                {author && (
                    <p className="text-sm text-muted-foreground">Por {author}</p>
                )}
            </CardContent>
            <CardFooter>
                <Button variant="outline" size="sm">
                    Leer Más
                </Button>
            </CardFooter>
        </Card>
    );
}