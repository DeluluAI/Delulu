import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

function Contact() {
    return (
        <div className='flex justify-between items-center bg-transparent font-Bai Jamjuree py-8 px-6 mx-12 max-h-32 border-2 border-t-0 border-b-0 border-deepGray uppercase bg-[#1b1b1b] text-white'>
            <p><span className="text-deepGray">contacto: </span>hello@kaix.com</p>
            <p>comienza tu camino como inversionista</p>
        </div>
    )
}

function RegulatedBy() {
    return (
        <div className='flex justify-center items-center gap-6 bg-transparent font-Bai Jamjuree py-8 px-6 mx-12 max-h-32 border-2 border-y-0 border-deepGray uppercase bg-[#1b1b1b] text-white'>
            <Image src='/CNBV.svg' width={80} height={100} alt='A Picture of the logo of Comision Nacional Bancaria y de Valores' />
            <p className="uppercase text-white text-md font-extralight">Regulados por la Comisión Nacional Bancaria y de Valores</p>
        </div>
    )
}

function GoTop({goTopButtonClicked, setGoTopButtonClicked }: { goTopButtonClicked:boolean , setGoTopButtonClicked: React.Dispatch<React.SetStateAction<boolean>>}) {
    const handleButtonStateSwitch = () => {
        setGoTopButtonClicked(!goTopButtonClicked)
    }
    return (
        <div className='flex justify-center items-center gap-96 bg-transparent font-Bai Jamjuree py-8 px-6 mx-12 max-h-32 border-2 border-y-0 border-deepGray uppercase bg-[#1b1b1b] text-white'>
            <Link
                href='#top'
                className="flex gap-2 uppercase text-white text-md font-extralight"
                onClick={handleButtonStateSwitch}
            >
                <ArrowUpIcon width={20} className='text-white' /> Subir</Link>
            <p className="flex gap-1 uppercase text-white text-md font-extralight upppercase">
                una plataforma que 
                <span className='bg-gradient-to-r from-[#50B8B1]  to-[#71DD8E] text-transparent bg-clip-text'>maneja tus inversiones</span>
            </p>
        </div>
    )
}

function Policy() {
    return (
        <div className='flex justify-start items-center gap-96 bg-transparent font-Bai Jamjuree py-8 px-6 mx-12 max-h-32 border-2 border-y-0 border-deepGray uppercase bg-[#1b1b1b] text-white z-10'>
            <p >copyright 2024 kaix</p>
            <Link href='#top' className="flex gap-2 uppercase text-white text-md font-extralight">política de privacidad</Link>
        </div>
    )
}

export { GoTop, Contact, RegulatedBy, Policy }

