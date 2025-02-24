import React from 'react';
import Image from 'next/image';
import WebLogo from '../public/web.png';

const WebDesign = () => {
  return (
    <main className="mt-4">
     
      <article className="container bg-blue-400 mx-auto px-4 py-6 rounded-xl w-4/5">
        <header
          id="intro"
          className="container bg-gray-200 mx-auto p-6 rounded-xl text-center w-full mb-6"
        >
          <h1 className="text-2xl font-bold mb-2">Web Design</h1>
          <p className="text-lg">Begin your adventures in digital making</p>
        </header>
      </article>

     
      <div
        id="panels"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto"
      >
        
        <section
          id="introduction-web"
          className="bg-blue-300 p-4 rounded-md shadow-md text-center"
        >
          <Image
            className="w-32 h-32 mx-auto mb-4"
            src={WebLogo}
            alt="Web Development Logo"
          />
          <h2 className="text-xl font-bold">Introduction to Web</h2>
          <p className="mt-2 mb-4">
            In this intro to web design for beginners, you will learn how to add
            structure and style to webpages with images, lists, fonts, links,
            and animations.
          </p>
        </section>

       
        <section
          id="more-web"
          className="bg-green-600 p-4 shadow-md text-center"
        >
          <Image
            className="w-32 h-32 mx-auto mb-4"
            src={WebLogo}
            alt="Web Development Logo"
          />
          <h2 className="text-xl font-bold">More Web</h2>
          <p className="mt-2 mb-4">
            "More Web" moves beyond the basics of introductory web dev and turns
            static and boring walls of information into fun and engaging
            experiences for users with HTML, CSS, and JavaScript.
          </p>
        </section>
      </div>

   
      <footer>
        <address className="text-center align-text-bottom text-black text-lg">
          Dublin Road, Dundalk
        </address>
      </footer>
    </main>
  );
};

export default WebDesign;
