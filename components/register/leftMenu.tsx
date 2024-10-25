'use client'
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function LeftMenu() {

    const pathName = usePathname()
    const pathToStepMap: { [key: string]: number } = {
        '/register/email': 1,
        '/register/informacion-personal': 2,
        '/register/codigo-de-verificacion': 3,
        '/register/informacion-de-compania': 4,
        '/register/informacion-fiscal': 5,
    };
    const currentStep = pathToStepMap[pathName]; 
    console.log('currentStep', pathName, currentStep)
    const steps = [
        { name: 'Correo electrónico' },
        { name: 'Código de verificación' },
        { name: 'Datos personales' },
        { name: 'Datos de empresa' },
        { name: 'Datos fiscales' },
    ];

    return (
        <div>
            <aside className="md:w-64 flex-none bg-[#F9F9FC] h-screen">
                <div className='md:ml-6 md:pt-8'>
                    <Image src="/darkLogo.png" alt="Delulu logo" width={100} height={100} />
                </div>
                <ol className=" mt-16 ml-4">
                    {steps.map((step, index) => {
                        return (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium m-2 ${index + 1 == currentStep ? '' : 'border-[1px] border-gray-400'}`}>
                                    {
                                        index + 1 == currentStep ?
                                            <span className='p-1 rounded-full bg-blue-600'><MoveRight className='text-white w-4 h-4' /></span>
                                            :
                                            null
                                    }
                                </div>
                                <span className={`text-sm ${index + 1 == currentStep ? 'font-semibold text-blue-600' : 'font-medium text-[#6D6D6D]'}`}>
                                    {step.name}
                                </span>
                            </li>
                        )
                    }
                    )}
                </ol>
            </aside>
        </div>
    )
}