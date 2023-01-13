import React from 'react';
import CryptoSearch from './CryptoSearch';

export default function CryptoFilter() {
  return (
    <div className='w-full border-2 mt-6 rounded border-zinc-300 flex justify-between p-2'>
      <CryptoSearch/>
      <div>Currency</div>
      <div>Filter</div>
    </div>
  );
}
