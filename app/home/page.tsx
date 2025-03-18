"use client";

import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import codelogo from "../public/code_club_logo.jpg";
import Container from "../components/container";

const HomePage = () => {
  return (
    <div>
      <Image src={codelogo} alt="Code Logo" width={100} height={100} />

      <Navbar />
      <Container />
     
    </div>
  );
};

export default HomePage;
