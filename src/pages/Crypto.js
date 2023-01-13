import React from 'react';
import CryptoFilter from '../components/CryptoFilter';
import CryptoTable from '../components/CryptoTable';

export default function Crypto() {
  return (
    <div className='w-3/4 h-full'>
        <CryptoFilter/>
        <CryptoTable/>
    </div>
  );
}
