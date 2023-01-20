import React, { useContext, useRef } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import CryptoSearch from './CryptoSearch';

export default function CryptoFilter() {
  const {setCurrency,setSortBy} = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let currencyInput = currencyRef.current.value;
    setCurrency(currencyInput);
    currencyRef.current.value = "";
  }

  const handleSortBy = (e) => {
    e.preventDefault();
    let sortbyInput = e.target.value;
    setSortBy(sortbyInput);
  }



  return (
    <div className="w-full border-2 mt-6 rounded border-zinc-300 flex justify-between p-2">
      <CryptoSearch />
      <div className="w-1/3">
        <form
          className="flex gap-1 items-center justify-center w-25"
          onSubmit={handleCurrencySubmit}
        >
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            name="currency"
            id="currency"
            className="w-1/4 bg-zinc-600 rounded p-1 border border-transparent focus:border-yellow-300 outline-none"
            placeholder="usd"
            ref={currencyRef}
          />
          <button type="submit" className="flex">
            <i className="ri-exchange-box-line text-yellow-400 text-4xl"></i>
          </button>
        </form>
      </div>
      {/*************  filter *************/}
      <div className="flex items-center w-1/3 justify-end">
        <label>
          <span>Sort by : </span>
          <select
            name="sortby"
            className='bg-zinc-600 rounded outline-0 p-1 border border-transparent focus:border-yellow-300 outline-none"
          placeholder="search..'
            onClick={handleSortBy}
          >
            <option value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market cap asc</option>
            <option value="gecko_desc">gecko desc</option>
            <option value="gecko_asc">gecko asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="volume_asc">volume asc</option>
            <option value="id_asc">id asc</option>
            <option value="id_desc">id desc</option>
          </select>
        </label>
      </div>
    </div>
  );
}
