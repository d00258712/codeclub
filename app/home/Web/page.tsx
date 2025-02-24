import React from 'react';
import Navbar from "@/app/components/navbar";
import Image from 'next/image'; 
import codelogo from '@/app/public/code_club_logo.jpg';
import Container from '@/app/components/containerWeb';

const HomePage = () => {
  return (
    <>
      
      <Image 
        src={codelogo} 
        alt="Code Logo" 
        width={100} 
        height={100} 
      />
      
      <Navbar />

      <Container />
      

      
    </>
  );
};

export default HomePage;