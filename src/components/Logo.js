import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center text-yellow-400 text-3xl gap-1 mt-6 absolute left-6">
      <i className="ri-bit-coin-line"></i>
      <small>CryptoBuzz</small>
    </Link>
  );
}
