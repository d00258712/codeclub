import React from 'react';
import Image from 'next/image';
import Python from '../public/python.png';

const Container = () => {
  return (
    <div className="bg-green-600 border-green-600 border-4 pt-16 pb-16 rounded-xl w-10/12 mx-auto mt-8">
      <main className="mt-4">
        <article className="container bg-blue-400 mx-auto px-4 py-6 rounded-xl w-4/5">
          <header
            id="intro"
            className="container bg-gray-200 mx-auto p-6 rounded-xl text-center w-full mb-6"
          >
            <h1 className="text-2xl font-bold mb-2">Python</h1>
            <p className="text-lg">
              Learn about the world’s most popular programming language to
              create digital art, interactive art, and more.
            </p>
          </header>
        </article>

        <div
          id="panels"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto"
        >
          
          <section
            id="introduction-python"
            className="bg-blue-300 p-4 rounded-md shadow-md text-center"
          >
            <Image
              className="w-32 h-32 mx-auto mb-4"
              src={Python}
              alt="Python Logo"
              height={128}
              width={128}
            />
            <h2 className="text-xl font-bold">Introduction to Python</h2>
            <p className="mt-2 mb-4">
              Learn about variables, functions, and loops in Python.
            </p>
          </section>

         
          <section
            id="more-python"
            className="bg-green-600 p-4 shadow-md text-center"
          >
            <Image
              className="w-32 h-32 mx-auto mb-4"
              src={Python}
              alt="Python Logo"
              height={128}
              width={128}
            />
            <h2 className="text-xl font-bold">More Python</h2>
            <p className="mt-2 mb-4">
              Move beyond the basics with lists, dictionaries, and data.
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
