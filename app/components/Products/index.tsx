"use client"

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
// import Image from 'next/image';

import { AvatarRow } from "../ui/avatar";
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { products, avatarUrls } from "./products";

function Products() {

    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 1], ['1%', '70%']);


    return (
        <>
            <div className="flex flex-col overflow-hidden mx-12 px-12 py-12 border-x-2 border-deepGray" id="productos">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col items-start gap-4 text-white">
                        <p className="font-light font-md">
                            Trusted by thousands <br />
                            of people worldwide
                        </p>
                        <AvatarRow
                            avatars={avatarUrls.map((url) => ({
                                imageUrl: url,
                                altText: "avatar",
                            }))}
                        />
                    </div>
                    <div className="flex flex-col gap-6 w-1/2 text-white py-32">
                        <div className="text-center px-6 py-1 rounded-full bg-gradient-to-r from-[#0A6BF8] to-[#CB4AFC] border-gray-600 border-2 w-52 uppercase font-bai">
                            Lo que ofrecemos
                        </div>
                        <h1 className="text-8xl font-semibold">
                            Nuestros productos
                            y herramientas
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-row basis-3/4 w-full flex-wrap px-12">
                {products.map((product, index) => (
                    <div className={`flex flex-col w-1/2 border-[1px] border-deepGray gap-6 p-16 
                        ${index % 2 === 0 ? 'border-r-[1px]' : ''} 
                        ${index % 2 === 1 ? 'border-l-[1px]' : ''} 
                        ${index > 1 ? 'border-y-0' : ''}`} key={product.id}>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-end text-gray-500 font-bai text-xl gap-6">{product.id} <InformationCircleIcon width={20} className="hover:text-green transition-colors duration-300 ease-in-out cursor-pointer" /> </div>
                            <div ref={gridRef} className='flex items-center justify-center'>
                                <motion.img
                                    src={product.image}
                                    style={{ width }}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-start text-5xl font-semibold font-nunito text-white">{product.name}</div>
                            <div className="flex flex-start text-xl font-extralight font-nunito text-white">{product.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Products;