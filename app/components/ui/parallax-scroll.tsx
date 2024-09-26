"use client";
import { useEffect } from 'react';
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface TeamMember {
    id: number;
    name: string;
    position: string;
    imgUrl: string;
    linkedin: string;
}
export const ParallaxScroll = ({
    team,
    className,
    goTopButtonClicked,
}: {
    team: TeamMember[];
    className?: string;
    goTopButtonClicked?: boolean;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        gridRef.current?.scrollTo({ top: 0, behavior: "auto"});
    }, [goTopButtonClicked]);

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const fourth = Math.ceil(team.length / 4);

    const firstPart = team.slice(0, fourth);
    const secondPart = team.slice(fourth, 2 * fourth);
    const thirdPart = team.slice(2 * fourth, 3 * fourth);
    const fourthPart = team.slice(3 * fourth);

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto no-scrollbar w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start w-full  gap-10 py-40"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <div className="relative group">
                                <div className="absolute top-0 left-0 w-full h-full bg-green opacity-0 group-hover:opacity-70 duration-300 transition-opacity ease-in-out flex items-start justify-start z-10">
                                    <Link
                                        href={el.linkedin}
                                        className="h-12 w-12 m-4 bg-[#1D1D1D] text-white flex items-center justify-center rounded-full font-bold font-nunito text-lg p-3 z-20"
                                        target="_blank"
                                    >
                                        in
                                    </Link>
                                </div>
                                <Image
                                    src={el.imgUrl}
                                    className="object-cover object-left-top !m-0 !p-0 group-hover:blur-[4px] transition-colors duration-300 ease-in-out overflow-hidden"
                                    height={1000}
                                    width={800}
                                    alt="thumbnail"
                                />
                            </div>

                            <h2 className="text-white font-semibold text-xl">{el.name}</h2>
                            <h4 className="text-placeGray text-md font-light font-bai">{el.position}</h4>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <div className="relative group">
                                <div className="absolute top-0 left-0 w-full h-full bg-green opacity-0 group-hover:opacity-70 duration-300 transition-opacity ease-in-out flex items-start justify-start z-10">
                                    <Link
                                        href='linkedin.com'
                                        className="h-12 w-12 m-4 bg-[#1D1D1D] text-white flex items-center justify-center rounded-full font-bold font-nunito text-lg p-3 z-20"
                                    >
                                        in
                                    </Link>
                                </div>
                                <Image
                                    src={el.imgUrl}
                                    className=" object-cover object-left-top !m-0 !p-0 group-hover:blur-[4px] transition-colors duration-300 ease-in-out"
                                    height={1000}
                                    width={800}
                                    alt="thumbnail"
                                />
                            </div>

                            <h2 className="text-white font-semibold text-xl">{el.name}</h2>
                            <h4 className="text-placeGray text-md font-light font-bai">{el.position}</h4>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <div className="relative group">
                                <div className="absolute top-0 left-0 w-full max-w-1/3 h-full bg-green opacity-0 group-hover:opacity-70 duration-300 transition-opacity ease-in-out flex items-start justify-start z-10">
                                    <Link
                                        href='linkedin.com'
                                        className="h-12 w-12 m-4 bg-[#1D1D1D] text-white flex items-center justify-center rounded-full font-bold font-nunito text-lg p-3 z-20"
                                    >
                                        in
                                    </Link>
                                </div>
                                <Image
                                    src={el.imgUrl}
                                    className="h-full object-cover object-left-top !m-0 !p-0 group-hover:blur-[4px] transition-colors duration-300 ease-in-out"
                                    height={1000}
                                    width={800}
                                    alt="thumbnail"
                                />
                            </div>

                            <h2 className="text-white font-semibold text-xl">{el.name}</h2>
                            <h4 className="text-placeGray text-md font-light font-bai">{el.position}</h4>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {fourthPart.map((el, idx) => (
                        <motion.div style={{ y: translateFourth }} key={"grid-3" + idx}>
                            <div className="relative group">
                                <div className="absolute top-0 left-0 w-full max-w-1/3 h-full bg-green opacity-0 group-hover:opacity-70 duration-300 transition-opacity ease-in-out flex items-start justify-start z-10">
                                    <Link
                                        href='linkedin.com'
                                        className="h-12 w-12 m-4 bg-[#1D1D1D] text-white flex items-center justify-center rounded-full font-bold font-nunito text-lg p-3 z-20"
                                    >
                                        in
                                    </Link>
                                </div>
                                <Image
                                    src={el.imgUrl}
                                    className="object-cover object-left-top !m-0 !p-0 group-hover:blur-[4px] transition-colors duration-300 ease-in-out"
                                    height={1000}
                                    width={800}
                                    alt="thumbnail"
                                />
                            </div>
                            <h2 className="text-white font-semibold text-xl">{el.name}</h2>
                            <h4 className="text-placeGray text-md font-light font-bai">{el.position}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
