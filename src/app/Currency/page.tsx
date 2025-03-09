import Hero from '@/app/Currency/components/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import Navbar from '@/components/Navbar';
import Welcome from '@/components/Welcome';
import Services from '@/components/Services';
import Transactions from '@/components/Transactions';
import Cat from './components/Cat';
import Footer from '@/components/Footer';
export default function page() {
  return (
    <div className="min-h-screen">
      <Cat />
      {/* <Hero /> */}
      {/* <div className="">
        <Welcome />
      </div> */}
      {/* <Services />
      <Transactions />
      <Footer /> */}
    </div>
  );
}
