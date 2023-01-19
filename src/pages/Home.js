import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import { CryptoProvider } from '../context/CryptoContext';

export default function Home() {
  return (
    <CryptoProvider>
      <div className="h-full w-full flex flex-col items-center content-center text-white relative pb-8">
        <div className="bg-zinc-900 w-screen h-screen fixed -z-20"></div>
        <Logo />
        <Navbar />
        <Outlet />
      </div>
    </CryptoProvider>
  );
}
