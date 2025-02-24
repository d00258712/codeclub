import React from 'react';
import Image from 'next/image';
import IntroScratch from '@/app/public/scratch-intro.webp';
import moreScratch from '@/app/public/more-scratch.webp';
import furtherScratch from '@/app/public/further-scratch.webp';

const Container = () => {
  return (
    <div className="bg-green-600 border-green-600 border-4 pt-16 pb-16 rounded-xl w-10/12 mx-auto mt-8">
      <main className="mt-4">
        <article className="container bg-blue-400 mx-auto px-4 py-6 rounded-xl w-4/5">
          <header
            id="intro"
            className="container bg-gray-200 mx-auto p-6 rounded-xl text-center w-full mb-6"
          >
            <h1 className="text-2xl font-bold mb-2">Scratch</h1>
            <p className="text-lg">Begin your journey with Scratch</p>
          </header>
        </article>

        <div
          id="panels"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto"
        >
          
          <section
            id="one"
            className="bg-orange-400 p-4 rounded-md shadow-md text-center"
          >
            <Image
              className="w-32 h-32 mx-auto mb-4"
              src={IntroScratch}
              alt="Scratch logo"
              height={128}
              width={128}
            />
            <h2 className="text-xl font-bold">Introduction to Scratch</h2>
            <p className="mt-2 mb-4">
              Create animations, apps, and interactive stories by adding code,
              costumes, and sounds.
            </p>
          </section>

          
          <section
            id="two"
            className="bg-blue-300 p-4 rounded-md shadow-md text-center"
          >
            <Image
              className="w-32 h-32 mx-auto mb-4"
              src={moreScratch}
              alt="Python Logo"
              height={128}
              width={128}
            />
            <h2 className="text-xl font-bold">More Scratch</h2>
            <p className="mt-2 mb-4">
              Dive deeper into Scratch and explore advanced features for
              creating dynamic animations and stories.
            </p>
          </section>

       
          <section
            id="three"
            className="bg-green-600 p-4 rounded-md shadow-md text-center"
          >
            <Image
              className="w-32 h-32 mx-auto mb-4"
              src={furtherScratch}
              alt="Web Logo"
              height={128}
              width={128}
            />
            <h2 className="text-xl font-bold">Further Scratch</h2>
            <p className="mt-2 mb-4">
              Take your Scratch skills to the next level and build complex
              interactive projects.
            </p>
          </section>
        </div>
      </main>

      <footer>
        <address className="text-center align-text-bottom text-black text-lg">
          Dublin Road, Dundalk
        </address>
      </footer>
    </div>
  );
};

export default Container;
