import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center content-center text-white relative">
      <div className="bg-gray-400 w-screen h-screen fixed -z-20"></div>
      <Logo />
      <Outlet />
    </div>
  );
}
