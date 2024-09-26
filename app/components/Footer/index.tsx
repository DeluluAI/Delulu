import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/solid'

const Footer: React.FC = () => {
    return (
        <footer className="flex items-start justify-center py-12 px-6 mx-12 text-white border-x-2 border-deepGray">
            <div className="flex flex-col w-1/2 min-h-[450px] justify-between z-10">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-start uppercase">
                        <p className='text-deepGray'>Es nuestra prioridad que entiendas como </p>
                        funciona el mundo complejo de las inversiones.
                    </div>
                </div>
                <div className="flex flex-col">
                    <Image src='/kaix icon.png' alt='An image of the logo of Kaix' width={100} height={100} />
                </div>
            </div>
            <div className="flex flex-col w-1/2 gap-32 z-10">
                <div className="flex flex-col gap-12">
                    <h1 className='text-5xl font-bold'>Conviértete en un inversionista de primer nivel con KAIX </h1>
                    <div className="border border-deepGray p-1 pl-6 rounded-xl flex items-center gap-6">
                        <input
                            type="text"
                            className="flex-grow bg-transparent outline-none placeholder:text-placeGray text-placeGray"
                            placeholder="Tú Email"
                        />
                        <button className="flex justify-center items-center gap-4 ml-4 bg-green text-black font-bold text-md px-8 py-3 h-full rounded-xl hover:bg-darkGreen transition-colors duration-300 ease-in-out">
                            Unete a la lista de espera
                            <PlusIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <ul className="flex flex-col">
                            <li><Link href="#">Acerca de</Link></li>
                            <li><Link href="#">Productos</Link></li>
                            <li><Link href="#">Equipo</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-row items-end">
                        <div className="flex gap-4 list-none">
                            <li className='border-[1px] rounded-full border-white w-12 h-12 flex justify-center items-center'><Link href="#" ><Image  src='/linkedin.svg' width={20} height={20} alt='' /></Link></li>
                            <li className='border-[1px] rounded-full border-white w-12 h-12 flex justify-center items-center'><Link href="#" ><Image  src='/facebook.svg' width={20} height={20} alt='' /></Link></li>
                            <li className='border-[1px] rounded-full border-white w-12 h-12 flex justify-center items-center'><Link href="#" ><Image  src='/X.svg' width={20} height={20} alt='' /></Link></li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center relative w-0 z-0">
                <div className='w-[601.005px] h-[733.594px] rotate-[-37.309deg] flex-shrink-0 bg-[#0572EA] blur-[150px] opacity-40 absolute top-[250px] left-[-1300px]'></div>
                <div className='w-[646.745px] h-[770.102px] rotate-[-26.482deg] flex-shrink-0 bg-[#4DA135] blur-[150px] opacity-50 absolute top-[250px] left-[-1500px]'></div>
            </div>
        </footer>
    );
};

export default Footer;