"use client";

import { motion } from "framer-motion";
import React from "react";
import { PlusIcon } from '@heroicons/react/24/solid'
function Community() {
    return (
        <div className="bg-strongGray h-auto flex flex-col mx-12 overflow-hidden">
            <div className="border-deepGray border-2 border-y-0 py-32">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-6 items-center justify-center px-12 font-nunito text-white z-10"
                >
                    <div className="text-center px-6 py-1 text-white rounded-full bg-gradient-to-r from-[#0A6BF8] to-[#CB4AFC] border-gray-600 border-2">
                        Inversiones sin miedo
                    </div>
                    <div className="text-3xl md:text-8xl font-semibold  dark:text-white text-center ">
                        Descubre, Disfruta y Celebra con KAIX
                    </div>
                    <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4 ">
                    Únete a la comunidad e inicia tu camino inversionista.
                    </div>
                    <div className="border border-deepGray p-1 pl-6 rounded-xl flex items-center gap-6">
                        <input
                            type="text"
                            className="flex-grow bg-transparent outline-none placeholder:text-placeGray text-placeGray"
                            placeholder="Tú Email"
                        />
                        <button className="flex justify-center items-center gap-4 ml-4 bg-green text-black font-bold text-md px-8 py-3 h-full rounded-xl hover:bg-darkGreen transition-colors duration-300 ease-in-out">
                           Suscribete
                            <PlusIcon className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
                <div className="flex justify-center relative w-0 z-0">
                    <div className='w-[601.005px] h-[733.594px] rotate-[-37.309deg] flex-shrink-0 bg-[#0572EA] blur-[150px] opacity-40 absolute top-0 left-0'></div>
                    <div className='w-[646.745px] h-[770.102px] rotate-[-26.482deg] flex-shrink-0 bg-[#4DA135] blur-[150px] opacity-50 absolute top-0 left-0'></div>
                    <div className='w-[601.005px] h-[733.594px] rotate-[-37.309deg] flex-shrink-0 bg-[#0572EA] blur-[150px] opacity-40 absolute bottom-[200px] right-[-1600px]'></div>
                    <div className='w-[646.745px] h-[770.102px] rotate-[-26.482deg] flex-shrink-0 bg-[#4DA135] blur-[150px] opacity-50 absolute bottom-[200px] right-[-1600px]'></div>
                </div>
            </div>
        </div>
    );
}

export default Community;