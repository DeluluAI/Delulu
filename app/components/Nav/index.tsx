
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars2Icon } from '@heroicons/react/24/solid'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetFooter,
    SheetTitle
} from "@/components/ui/sheet"

const Nav: React.FC = () => {
    const leftMenuLinks = [
        {
            name: 'Acerca de',
            link: '#acerca-de'
        },
        {
            name: 'Productos',
            link: '#productos'
        },
        {
            name: 'Equipo',
            link: '#team'
        }
    ]
    return (
        <nav className='flex justify-between items-center bg-transparent font-Bai Jamjuree py-8  px-6 mx-12 max-h-32 border-2 border-y-0 border-deepGray text-white'>
            <Image src='/Logo.svg' width={110} height={22} alt='A Picture of the logo of KAIX' />
            <ul className='flex gap-8'>
                {leftMenuLinks.map((item, key) =>
                    <li key={item.name}><Link className=" font-bai hover:text-gray-300 transition-colors duration-300 ease-out uppercase" href={item.link}>{item.name}</Link></li>
                )
                }

            </ul>
            <Sheet>
                <SheetTrigger className='p-3 border-none bg-transparent hover:text-gray-300 group'>
                    <Bars2Icon width={40} className='group-hover:text-deepGray transition-all duration-100 ease-in-out' />
                </SheetTrigger>
                <SheetContent
                    side='left'
                    className='bg-transparent w-full border-deepGray overflow-hidden'>
                    <SheetTitle>
                        <Image src='/Logo.svg' width={110} height={22} alt='A Picture of the logo of KAIX' />
                    </SheetTitle>
                    <SheetHeader className='text-white font-nunito text-7xl font-bold mt-48 gap-12'>
                        {leftMenuLinks.map((link, index) => {
                            return (
                                <Link
                                    href={link.link}
                                    key={link.name}
                                    className='uppercase flex items-end z-20 hover:text-gray-300 transition-colors ease-in-out duration-200'>
                                    {link.name}
                                    <p className='ml-8 text-2xl text-gray-500 font-bai'>{`0${index + 1}`}</p>
                                </Link>
                            )
                        })}
                    </SheetHeader>
                    <SheetFooter>
                        <div className="flex justify-center relative w-full">
                            <div className='w-[601.005px] h-[733.594px] rotate-[-37.309deg] flex-shrink-0 bg-[#0572EA] blur-[150px] opacity-40 absolute top-0 left-[-50px]'></div>
                            <div className='w-[646.745px] h-[770.102px] rotate-[-26.482deg] flex-shrink-0 bg-[#4DA135] blur-[150px] opacity-50 absolute top-0 left-[-150px]'></div>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </nav>
    );
};

export default Nav;