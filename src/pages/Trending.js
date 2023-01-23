import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import TrendingSingleCoin from '../components/TrendingSingleCoin';
import { TrendingContext } from '../context/TrendingContext';

export default function Trending() {
  const { trendingInfo } = useContext(TrendingContext);
  return (
    <div className="w-3/4 h-full">
      <div className="grid grid-cols-2 border rounded border-gray-200 mt-8 min-h-[70vh]">
        {trendingInfo && trendingInfo.map((coin) => <TrendingSingleCoin key={coin.item.coin_id} coin={coin.item}/>)}
      </div>
      <Outlet/>
    </div>
  );
}
