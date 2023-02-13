import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import PageNav from './PageNav';

export default function CryptoTable() {
    const {cryptoInfo, currency} = useContext(CryptoContext);
  return (
    <div>
      <div className="border rounded border-gray-200 mt-8">
        {cryptoInfo && (
          <table className="w-full text-center">
            <thead className="text-base border-b border-gray-200">
              <tr>
                <th className="py-1 font-medium">#</th>
                <th className="py-1 font-medium">NAME</th>
                <th className="py-1 font-medium hidden sm:block">PRICE</th>
                <th className="py-1 font-medium">VOLUME</th>
                <th className="py-1 font-medium hidden sm:block">MARKET CAP CHANGE</th>
                <th className="py-1 font-medium">1H</th>
                <th className="py-1 font-medium">24H</th>
                <th className="py-1 font-medium">7D</th>
              </tr>
            </thead>
            <tbody>
              {cryptoInfo.map((singleData) => {
                return (
                  <tr
                    key={singleData.id}
                    className="text-sm hover:bg-zinc-800 border-b border-gray-200 last:border-b-0"
                  >
                    <td className="py-3 flex items-center justify-center gap-1">
                      {/* <button className="outline-0 border-0 bg-none cursor-pointer">
                        <i className="ri-heart-line text-2xl hover:text-yellow-400"></i>
                      </button> */}

                      <Link to={`/${singleData.id}`}>
                        <img
                          src={singleData.image}
                          alt={singleData.name}
                          className="h-6 w-6"
                        />
                      </Link>
                      <span className="uppercase">
                        <Link to={`/${singleData.id}`}>
                          {singleData.symbol}
                        </Link>
                      </span>
                    </td>
                    <td className="py-3">
                      <Link to={`/${singleData.id}`}>{singleData.name}</Link>
                    </td>
                    {/* In the below line, using browser Intl Api to get currency symbol */}
                    <td className="py-3 hidden sm:block">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                      }).format(singleData.current_price)}
                    </td>
                    <td className="py-3">{singleData.total_volume}</td>
                    <td className="py-3 hidden sm:block">
                      {singleData.market_cap_change_24h}%
                    </td>
                    <td
                      className={
                        singleData.price_change_percentage_1h_in_currency > 0
                          ? "py-3 text-green-600"
                          : "py-3 text-red-600"
                      }
                    >
                      {Number(
                        singleData.price_change_percentage_1h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        singleData.price_change_percentage_24h_in_currency > 0
                          ? "py-3 text-green-600"
                          : "py-3 text-red-600"
                      }
                    >
                      {Number(
                        singleData.price_change_percentage_24h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        singleData.price_change_percentage_7d_in_currency > 0
                          ? "py-3 text-green-600"
                          : "py-3 text-red-600"
                      }
                    >
                      {Number(
                        singleData.price_change_percentage_7d_in_currency
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div id="crypto-footer" className='flex justify-between items-center flex-col-reverse sm:flex-row gap-2 sm:gap-0'>
        <p className=''>Data from <a href="https://www.coingecko.com/">CoinGecko</a></p>
        <p>Made with ❤ By <a href="http://www.linkedin.com/in/aftamim345/" rel="noreferrer" target="_blank" className='text-yellow-400'>Abdul Fattah</a> </p>
        {cryptoInfo.length > 2 ? <PageNav/> : ""}
      </div>
    </div>
  );
}
