import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-end w-full p-4">
      <nav className="absolute top-0 right-0 hidden md:flex space-x-4">
        <Link href="/home" passHref>
          <button className="bg-gray-400 border-solid border-2 px-1 py-1 rounded-md border-black">
            Home
          </button>
        </Link>
        <Link href="/home/Scratch" passHref>
          <button className="bg-gray-400 border-solid border-2 px-1 py-1 rounded-md border-black">
            Scratch
          </button>
        </Link>
        <Link href="/home/Python" passHref>
          <button className="bg-gray-400 border-solid border-2 px-1 py-1 rounded-md border-black">
            Python
          </button>
        </Link>
        <Link href="/home/Web" passHref>
          <button className="bg-gray-400 border-solid border-2 px-1 py-1 rounded-md border-black">
            Web
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

