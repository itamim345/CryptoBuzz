import { createContext, useLayoutEffect, useState } from "react";

//Context Object
export const TrendingContext = createContext({});

//Provider
export const TrendingProvider = ({ children }) => {
  const [trendingInfo, setTrendingInfo] = useState([]);

  const getTrendingInfo = async () => {
    try {
      const info = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((resp) => resp.json())
        .then((data) => data.coins);
        setTrendingInfo(info);
    } catch (error) {
      console.log(error);
    }
  };


  useLayoutEffect(() => {
    getTrendingInfo();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendingInfo
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
