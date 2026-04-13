import React from 'react';
import '../styles/Loading.css';

const Loader = () => {
  return (
    <div className='bg-black w-screen h-screen overflow-hidden relative  flex items-center justify-center'>
      <div className="w-screen loader-wrapper bg-black p-100 flex items-center gap-1 justify-center">
        <span className="loader-letter text-7xl">S</span>
        <span className="loader-letter text-7xl">H</span>
        <span className="loader-letter text-7xl">A</span>
        <span className="loader-letter text-7xl">R</span>
        <span className="loader-letter text-7xl">A</span>
        <span className="loader-letter text-7xl">F</span>
        <span className="loader-letter text-7xl">A</span>
        <span className="loader-letter text-7xl">T</span>
        <span className="loader-letter text-7xl">H</span>
        <div className="loader " />
      </div>
    </div>
  );
}


export default Loader;
