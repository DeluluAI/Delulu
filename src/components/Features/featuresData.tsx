import { Feature } from "@/types/feature";
import Image from 'next/image'
const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src='/images/features/Summarize.png'
        width={50}
        height={50}
        alt="Extractor"
        style={{filter:'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(88deg) brightness(105%) contrast(101%)'}}
      />
    ),
    title: "KeyPoint Extractor",
    paragraph: "Captura la información importante de cada llamada. Y califica a tus clientes automáticamente según su potencial de compra.",
    btn: "Conoce más",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <Image
        src='/images/features/Analytics.png'
        width={50}
        height={50}
        alt="Analytics"
        style={{filter:'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(88deg) brightness(105%) contrast(101%)'}}
      />
    ),
    title: "AI Analytics",
    paragraph: "Mide los KPIs que te interesan y descubre otros que no conocias. Obtén visibilidad completa de tus equipos.",
    btn: "Conoce más",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <Image
        src='/images/features/Crm.png'
        width={50}
        height={50}
        alt="CRM"
        style={{filter:'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(88deg) brightness(105%) contrast(101%)'}}
      />
    ),
    title: "CRM Integrations",
    paragraph: "Sigue trabajando como lo venías haciendo. Tu CRM siempre actualizado automáticamente.",
    btn: "Conoce más",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <Image
        src='/images/features/Pitch.png'
        width={50}
        height={50}
        alt="Pitch"
        style={{filter:'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(88deg) brightness(105%) contrast(101%)'}}
      />
    ),
    title: "Pitch A/B Testing",
    paragraph: "Entrena a tu equipo continuamente con destaca fortalezas y puntos de mejora.",
    btn: "Conoce más",
    btnLink: "/#",
  },
];
export default featuresData;
