import React from 'react';

export default function CryptoTable() {
  return (
    <div className="border rounded border-gray-200 mt-8">
      <table className="w-full text-center">
        <thead className="text-base border-b border-gray-200">
          <tr>
            <th className="py-1 font-medium">TABLE-1</th>
            <th className="py-1 font-medium">TABLE-2</th>
            <th className="py-1 font-medium">TABLE-3</th>
            <th className="py-1 font-medium">TABLE-4</th>
            <th className="py-1 font-medium">TABLE-5</th>
            <th className="py-1 font-medium">TITLE-6</th>
            <th className="py-1 font-medium">TITLE-7</th>
            <th className="py-1 font-medium">TITLE-8</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm hover:bg-zinc-800 border-b border-gray-200 last:border-b-0">
            <td className='py-3'>Data1</td>
            <td className='py-3'>Data2</td>
            <td className='py-3'>Data3</td>
            <td className='py-3'>Data4</td>
            <td className='py-3'>Data5</td>
            <td className='py-3'>Data6</td>
            <td className='py-3'>Data7</td>
            <td className='py-3'>Data8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
