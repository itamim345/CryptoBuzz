import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

export default function PageNav() {
    const { page, setPage} = useContext(CryptoContext);
    const prev = () => {
        if (page>1) {
            setPage(page-1)
        }
    }
    const next = () => {
        setPage(page+1)
    }
  return (
    <div className='flex items-center gap-2 text-4xl text-yellow-400 mt-2 sm:mt-2'>
      <span onClick={prev}>
        <i className="ri-arrow-left-circle-line cursor-pointer"></i>
      </span>
      <span className='text-white text-lg rounded-full bg-gray-600 h-8 w-8 flex justify-center items-center'>{page}</span>
      <span onClick={next}>
        <i class="ri-arrow-right-circle-line cursor-pointer"></i>
      </span>
    </div>
  );
}
