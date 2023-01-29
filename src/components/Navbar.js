import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <div className='w-full px-5 lg:px-0 lg:w-3/4 flex justify-between mt-8 items-center'>
      <Logo/>
      <nav className="w-3/4 border-2 border-yellow-400 rounded p-1 flex justify-between gap-2 text-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) => {
            return `rounded my-1 w-1/2 ${
              isActive
                ? "bg-yellow-400 text-black"
                : "bg-gray-600 hover:text-yellow-400"
            }`;
          }}
        >
          CRYPTO
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) => {
            return ` rounded my-1 w-1/2 ${
              isActive
                ? "bg-yellow-400 text-black"
                : "bg-gray-600 hover:text-yellow-400"
            }`;
          }}
        >
          TRENDING
        </NavLink>
      </nav>
    </div>
  );
}
