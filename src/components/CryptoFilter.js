import React, { useContext, useRef } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import CryptoSearch from './CryptoSearch';

export default function CryptoFilter() {
  const {setCurrency} = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let currencyInput = currencyRef.current.value;
    setCurrency(currencyInput);
  }


  return (
    <div className="w-full border-2 mt-6 rounded border-zinc-300 flex justify-between p-2">
      <CryptoSearch />
      <div>
        <form className="flex gap-1 items-center w-25" onSubmit={handleCurrencySubmit}>
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            name="currency"
            id="currency"
            className="w-1/4 bg-zinc-600 rounded p-1 border border-transparent focus:border-yellow-300 outline-none"
            placeholder="usd"
            ref={currencyRef}
          />
          <button type="submit" className='flex'>
            <i className="ri-exchange-box-line text-yellow-400 text-4xl"></i>
          </button>
        </form>
      </div>
      <div>Filter</div>
    </div>
  );
}
