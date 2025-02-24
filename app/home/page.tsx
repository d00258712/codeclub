import React from 'react';
import Navbar from '../components/navbar'; // Import your Navbar component
import Image from 'next/image'; // Import the Next.js Image component
import codelogo from '../public/code_club_logo.jpg';
import Container from '../components/container';

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
