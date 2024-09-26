"use client";

import { useState } from 'react';
import Hero from './components/Hero'
import Info from './components/Info'
import { Contact, RegulatedBy, GoTop, Policy } from './components/MiniBars'
import Products from './components/Products';
import Community from './components/Community';
import { Team } from './components/Team';
import Footer from './components/Footer';
import Logo from './components/Logo';

export default function Home() {

  const [goTopButtonClicked, setGoTopButtonClicked] = useState(false);

  return (
    <main className='bg-strongGray overflow-hidden'>
      <Logo />
      <Hero />
      <Info />
      <hr className='border-t-2 border-deepGray' />
      <Contact />
      <hr className='border-t-2 border-deepGray' />
      <Products />
      <hr className='border-t-2 border-deepGray' />
      <RegulatedBy />
      <hr className='border-t-2 border-deepGray' />
      <Community />
      <hr className='border-t-2 border-deepGray' />
      <Team goTopButtonClicked={goTopButtonClicked} />
      <hr className='border-t-2 border-deepGray' />
      <GoTop
        goTopButtonClicked={goTopButtonClicked}
        setGoTopButtonClicked={setGoTopButtonClicked}
      />
      <hr className='border-t-2 border-deepGray' />
      <Footer />
      <hr className='border-t-2 border-deepGray' />
      <Policy />
    </main>
  );
}