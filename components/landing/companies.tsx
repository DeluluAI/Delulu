import Image from "next/image";
export function Companies() {
  const companies = [
    '/landing/aws.png',
    '/landing/mistral.png',
    '/landing/snowball.png',
    '/landing/softtek.png',
    '/landing/startupmexico.png',
  ]
    return (
    <div className="flex flex-col items-center justify-center md:w-full">
      <h1 className="text-3xl font-bold mb-4">Con la confianza de las mejores marcas</h1>
      <div className="flex flex-wrap gap-4">
        {companies.map((company, index) => (
          <Image key={index} src={company} alt="Company" width={100} height={70}  />
        ))}
      </div>
    </div>
  );
}