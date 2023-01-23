import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TrendingSingleCoin({coin}) {
    const navigate= useNavigate();
  return (
    <div className="bg-zinc-800 rounded p-2 m-2 cursor-pointer hover:bg-zinc-900 hover:border hover:border-yellow-400">
      {coin ? (
        <div className='text-center' onClick={() => navigate(coin.id)}>
          <img src={coin.large} alt={coin.name} className="h-[3rem] w-[3rem] rounded-full mx-auto" />
          <h3 className='text-xl text-yellow-400'>{coin.name}</h3>
          <h3 className='text-lg text-zinc-300'>Score: <span className='text-yellow-400'>{coin.score+1}</span></h3>
          <h3 className='text-lg text-zinc-300'>Market cap rank: <span className='text-yellow-400'>{coin.market_cap_rank}</span></h3>
        </div>
      ) : null}
    </div>
  );
}
