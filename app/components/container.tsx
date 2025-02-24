import React from 'react';
import Image from 'next/image';
import Scratch from '../public/scratch.png';
import Python from '../public/python.png';
import Web from '../public/web.png';

const Container = () => {
  return (
    <div className="bg-green-600 border-green-600 border-4 pt-16 pb-16 rounded-xl w-10/12 mx-auto mt-8">
      <div className="p-12">
        <div
          id="panels"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto"
        >
          
          <section
            id="one"
            className="bg-orange-400 p-4 rounded-md shadow-md text-center"
          >
            <Image
                          src={Scratch}
                          height={300}
                          width={500} alt={''}            />

        
           
            <h2 className="text-xl font-bold">Scratch</h2>
            <p className="mt-2 mb-4">
              Create animations, apps, and interactive stories by adding code,
              costumes, and sounds.
            </p>
            <a href="../pages/scratch.html">
              <button className="border-solid border-2 px-2 py-1 border-black bg-gray-400">
                Explore Scratch Projects
              </button>
            </a>
          </section>

          
          <section
            id="two"
            className="bg-blue-300 p-4 rounded-md shadow-md text-center"
          >
           <Image
                          src={Python}
                          height={300}
                          width={500} alt={''}            />

            <h2 className="text-xl font-bold">Python</h2>
            <p className="mt-2 mb-4">
              Make digital art, games, and more while exploring one of the
              world's most popular programming languages.
            </p>
            <a href="../pages/python.html">
              <button className="border-solid border-2 px-2 py-1 border-black bg-gray-400">
                Explore Python Projects
              </button>
            </a>
          </section>

         
          <section
            id="three"
            className="bg-green-600 p-4 rounded-md shadow-md text-center"
          >
          <Image
                          src={Web}
                          height={300}
                          width={500} alt={''}            />

            <h2 className="text-xl font-bold">Web design</h2>
            <p className="mt-2 mb-4">
              Build websites and apps by learning HTML, CSS, and JavaScript.
            </p>
            <a href="../pages/web.html">
              <button className="border-solid border-2 px-2 py-1 border-black bg-gray-400">
                Explore Web Projects
              </button>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Container;
