import React from 'react'
import Navbar from '@/app/components/navbar';
import Image from 'next/image'; // Import the Next.js Image component
import codelogo from '@/app/public/code_club_logo.jpg';
import Container from '@/app/components/containerSCR';

const page = () => {

    return (
      <>
        {/* Image Component */}
        <Image 
          src={codelogo} 
          alt="Code Logo" 
          width={100} 
          height={100} 
        />
        {/* Navbar Component */}
        <Navbar />
  
        <Container />
        
  
        
      </>
    );
  };

export default page