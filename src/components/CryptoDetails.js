import React, { useContext, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
export default function CryptoDetails() {
  let { coinId } = useParams();
  let navigate = useNavigate();
  let { getcoinInfo, coinInfo, currency } = useContext(CryptoContext);
  useLayoutEffect(() => {
    getcoinInfo(coinId);
  }, [coinId]);

  const closeModal = () => {
    navigate("..");
  };

  console.log(coinInfo);

  return ReactDOM.createPortal(
    <div
      className="w-full h-full bg-zinc-900 bg-opacity-80 backdrop-blur-sm fixed top-0 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="w-[70%] min-h-[80%] bg-zinc-800 bg-opacity-90 rounded-md text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {coinInfo ? (
          <div className="flex justify-between items-center h-full p-2">
            <div className="h-full w-[50%] pr-2">
              <div className="flex justify-center items-center gap-3 pb-1">
                <img
                  src={coinInfo.image.large}
                  alt={coinInfo.id}
                  className="w-[3rem]"
                />
                <h2 className="text-lg">{coinInfo.name}</h2>
                <span className="uppercase bg-yellow-700 py-1 px-2 rounded bg-opacity-90">
                  {coinInfo.symbol}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg text-zinc-400">Price</span>
                <div>
                  <span className=" bg-red-700 p-1 rounded bg-opacity-50">
                    {Number(
                      coinInfo.market_data.price_change_percentage_24h
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: currency,
                  maximumSignificantDigits: 5,
                }).format(coinInfo.market_data.current_price[currency])}
              </h2>
              <div className="flex justify-between mt-3">
                <span className="text-base text-zinc-400">Market Cap</span>
                <span className="text-base text-zinc-400">
                  Fully Diluted Valuation
                </span>
              </div>
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(coinInfo.market_data.market_cap[currency])}
                </h2>
                <h2 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(
                    coinInfo.market_data.fully_diluted_valuation[currency]
                  )}
                </h2>
              </div>
              <div className="mt-4">
                <span className="text-base text-zinc-400">Total Volume</span>
                <h2 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(coinInfo.market_data.total_volume[currency])}
                </h2>
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-base text-zinc-400">Low 24H</span>
                <span className="text-base text-zinc-400">High 24H</span>
              </div>
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 5,
                  }).format(coinInfo.market_data.low_24h[currency])}
                </h2>
                <h2 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 5,
                  }).format(coinInfo.market_data.high_24h[currency])}
                </h2>
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-base text-zinc-400">Max Supply</span>
                <span className="text-base text-zinc-400">
                  Circulating Supply
                </span>
              </div>
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(coinInfo.market_data.max_supply)}
                </h2>
                <h2 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(coinInfo.market_data.circulating_supply)}
                </h2>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <a
                  href={coinInfo?.links?.homepage[0]}
                  className="bg-zinc-500 p-1 rounded bg-opacity-50 text-zinc-400 text-xs"
                  target="_blank"
                  rel="noreferrer"
                >
                  {coinInfo?.links?.homepage[0]}
                </a>
                <div className="flex gap-3">
                  <span className="text-base text-zinc-400">Sentiment: </span>
                  <span className=" bg-green-700 p-0.5 rounded bg-opacity-50">
                    {Number(coinInfo.sentiment_votes_up_percentage).toFixed(2)}%
                  </span>
                  <span className=" bg-red-700 p-0.5 rounded bg-opacity-50">
                    {Number(coinInfo.sentiment_votes_down_percentage).toFixed(
                      2
                    )}
                    %
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-pink-600 h-full w-[50%] text-center">Under Progress!</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>,
    document.getElementById("model")
  );
}
