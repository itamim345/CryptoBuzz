import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='w-1/2 border-2 border-yellow-400 rounded mt-8 p-1 flex justify-between gap-2 text-center'>
      <NavLink to="/" end className={({isActive})=>{
        return `rounded my-1 w-1/3 ${
          isActive ? "bg-yellow-400 text-black" : "bg-gray-600 hover:text-yellow-400"
        }`;
      }}>CRYPTO</NavLink>
      <NavLink to="/trending" className={({isActive})=>{
        return ` rounded my-1 w-1/3 ${
          isActive ? "bg-yellow-400 text-black" : "bg-gray-600 hover:text-yellow-400"
        }`;
      }}>TRENDING</NavLink>
      <NavLink to="/favourites" className={({isActive})=>{
        return `bg-gray-600 rounded my-1 w-1/3 ${
          isActive ? " bg-yellow-400 text-black" : "bg-gray-600 hover:text-yellow-400"
        }`;
      }}>FAVOURITES</NavLink>
    </nav>
  );
}
