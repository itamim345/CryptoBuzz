import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="text-xl sm:text-2xl md:text-3xl leading-4 text-center">
      <div className="flex items-center text-yellow-400 gap-1">
        <i className="ri-bit-coin-line"></i>
        <small>CryptoBuzz</small>
      </div>
      <small className='text-xs'>Analyze the crypto market</small>
    </Link>
  );
}
