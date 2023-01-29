import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center text-yellow-400 text-3xl gap-1">
        <i className="ri-bit-coin-line"></i>
        <small>CryptoBuzz</small>
      </div>
      <small>Analyze the crypto market</small>
    </Link>
  );
}
