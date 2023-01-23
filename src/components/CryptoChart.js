import React, { useContext, useLayoutEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CryptoContext } from '../context/CryptoContext';

function CustomTooltip({ payload, label, active, currency}) {
  if (active && payload && payload.length>0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-xs text-yellow-400">{`${label} : ${new Intl.NumberFormat(
          "en-IN",
          {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 5,
          }
        ).format(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
}

const ChartComponent = ({ chartData, currency, type}) => {
  return (
    <ResponsiveContainer height={"90%"}>
      <LineChart width={600} height={300} data={chartData}>
        <Line type="monotone" dataKey={type} stroke="#facc15" />
        <CartesianGrid stroke="#8f8f97" />
        <XAxis dataKey="date" hide/>
        <YAxis dataKey={type} domain={["auto", "auto"]} hide />
        <Tooltip
          content={<CustomTooltip currency={currency} cursor={false} />}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default function CryptoChart({id}) {
    const [chartData, setChartData] = useState();
    const {currency} = useContext(CryptoContext)
    const [type, setType] = useState("prices")
    const [days, setDays] = useState(7)
    useLayoutEffect(() => {
      const getChartInfo = async(id) => {
        try {
        const info = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        )
          .then((resp) => resp.json())
          .then((data) => data);

            let convertedInfo = info[type].map((item) => {
                return {
                  date: new Date(item[0]).toLocaleDateString(),
                  [type]: item[1],
                };
            })
            console.log(convertedInfo);
          setChartData(convertedInfo);
      } catch (error) {
        console.log(error);
      }
      }
      getChartInfo(id)
    }, [id,type,days]);
  return (
    <div className="w-full h-[98%]">
      <ChartComponent chartData={chartData} currency={currency} type={type} />
      <div>
        <button onClick={() => setType("prices")} className={`text-sm py-0.5 px-1 bg-zinc-900 border opacity-90 border-white rounded mr-1 ${type==='prices' ? 'bg-yellow-400 text-black border-black' : ''}`}>Price</button>
        <button onClick={() => setType("market_caps")} className={`text-sm py-0.5 px-1 bg-zinc-900 border opacity-90 border-white rounded m-1 ${type==='market_caps' ? 'bg-yellow-400 text-black border-black' : ''}`}>Market caps</button>
        <button onClick={() => setType("total_volumes")} className={`text-sm py-0.5 px-1 bg-zinc-900 border opacity-90 border-white rounded m-1 ${type==='total_volumes' ? 'bg-yellow-400 text-black border-black' : ''}`}>Total volumes</button>

        <button onClick={() => setDays(7)} className={`text-sm py-0.5 px-1 bg-zinc-900 border opacity-90 border-white rounded m-1${days===7 ? 'border-black bg-yellow-400 text-black' : ''}`}>7d</button>
        <button onClick={() => setDays(14)} className={`text-sm py-0.5 px-1 bg-zinc-900 border opacity-90 border-white rounded m-1 ${days===14 ? 'bg-yellow-400 text-black border-black' : ''}`}>14d</button>
        <button onClick={() => setDays(30)} className={`text-sm py-0.5 px-1 bg-zinc-900 border opacity-90 border-white rounded m-1 ${days===30 ? 'bg-yellow-400 text-black border-black' : ''}`}>30d</button>
      </div>
    </div>
  );
}
