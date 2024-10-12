import Image from "next/image";
export function Companies() {
  const companies = [
    { src: '/landing/aws.png', width: 200, height: 57},
    { src: '/landing/mistral.png', width: 362, height: 75 },
    { src: '/landing/snowball.png', width: 225, height: 100 },
    { src: '/landing/softtek.png', width: 252, height: 100 },
    { src: '/landing/startupmexico.png', width: 209, height: 40 },
  ]
    return (
    <div className="flex flex-col items-center justify-center md:w-full py-64">
      <h1 className="text-3xl font-bold mb-8">Con la confianza de las mejores marcas</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {companies.map((company, index) => (
          <Image 
            key={index} 
            src={company.src} 
            alt="Company" 
            width={company.width} 
            height={company.height} 
            className="h-auto w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
