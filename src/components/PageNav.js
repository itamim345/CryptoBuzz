import React from 'react';

export default function PageNav() {
  return (
    <div className='flex items-center gap-4 text-4xl text-yellow-400'>
      <span>
        <i className="ri-arrow-left-circle-line cursor-pointer"></i>
      </span>
      <span className='text-white text-xl rounded bg-gray-600 h-8 w-8 flex justify-center items-center'>01</span>
      <span>
        <i class="ri-arrow-right-circle-line cursor-pointer"></i>
      </span>
    </div>
  );
}
