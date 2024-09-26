"use client";
import React from "react";
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import { PlusIcon } from '@heroicons/react/24/solid'

function HeroScrollDemo() {
    const containerRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({ target:containerRef, offset: ["start start", "end start"] });
    const firstButtonPosition = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const secondButtonPosition = useTransform(scrollYProgress, [0, 1], ['80%', '0%']);


    return (
        <div className="flex flex-col overflow-hidden mx-12 px-12 pb-24 border-x-2 border-deepGray z-20" ref={containerRef} id="acerca-de">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/478Ay_lNpT4?autoplay=1&mute=1" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ zIndex: '10' }}></iframe>
            <div className="flex flex-row justify-between z-10 mt-24">
                <div className="flex flex-col gap-6 w-1/2">
                    <div className="text-center px-6 py-1 text-white rounded-full bg-gradient-to-r from-[#0A6BF8] to-[#CB4AFC] border-gray-600 border-2 w-52 uppercase font-bai">
                        Acerca de KAIX
                    </div>
                    <h1 className="text-8xl font-semibold text-white">
                        Quienes <br />
                        Somos
                    </h1>
                </div>
                <div className="flex flex-col gap-12 w-1/2 font-light text-lg text-white">
                    <p>
                        Somos KAIX, una plataforma disruptiva que te permite participar en los mejores productos de inversión resolviendo tu incertidumbre ante que hacer con tus finanzas, somos el puente entre los productos de inversión sofisticados y el inversionista que tienes dentro.
                        <br /> <br />
                        Nos encargamos de que entiendas todo el proceso de tu capital desde el momento en que inicias tu vida como inversionista, por lo que también es nuestra prioridad que entiendas cómo funciona el complejo mundo de las inversiones.
                    </p>
                    <motion.div
                        style={{ width: '100%', x: firstButtonPosition }}
                    >
                        <Link href='#productos' className="flex justify-center items-center h-12 w-72 bg-green text-black font-bold text-md px-8 py-3 rounded-lg hover:bg-darkGreen transition-colors duration-300 ease-in-out">
                            Conoce Xpertise

                        </Link>
                    </motion.div>


                    <h1 className="font-nunito text-6xl font-semibold mt-16">Nuestra Misión</h1>
                    <p>
                        Empoderarte y darte las herramientas adecuadas para convertirte en un inversor de primer nivel cerrando la brecha con los productos financieros de
                        élite y el mundo del capital privado, a la vez que te ofrecemos educación,  garantizamos que te mantengas informado y seguro en tus inversiones y/o nuevo camino como inversionista a una escala global
                    </p>
                    <motion.div
                        style={{ width: '100%', x: secondButtonPosition }}
                    >
                        <Link href='#productos' className="flex justify-center items-center h-12 w-[400px] gap-6 bg-green text-black font-bold text-md px-8 py-3 rounded-lg hover:bg-darkGreen transition-colors duration-300 ease-in-out">
                            Registrate a nuestro Newsletter
                            <PlusIcon className="w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default HeroScrollDemo;
