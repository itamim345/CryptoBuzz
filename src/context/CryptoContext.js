import { createContext, useLayoutEffect, useState } from "react";

//Context Object
export const CryptoContext = createContext({});

//Provider
export const CryptoProvider = ({children}) => {
    const [cryptoInfo, setCryptoInfo] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [coinSearched, setCoinSearched] = useState("");
    const [currency, setCurrency] = useState("usd");
    const [sortBy, setSortBy] = useState("market_cap_desc");

    const getcryptoInfo = async () => {
      try {
        const info = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearched}&order=${sortBy}&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
        )
          .then((resp) => resp.json())
          .then((data) => data);
        setCryptoInfo(info);
      } catch (error) {
        console.log(error);
      }
    };
    const getSearchResult = async(searchInput) => {
        try {
            const result = await fetch(
              `https://api.coingecko.com/api/v3/search?query=${searchInput}`
            )
              .then((resp) => resp.json())
              .then((data) => data);
            setSearchResult(result.coins);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useLayoutEffect(() => {
      getcryptoInfo();
    }, [coinSearched,currency,sortBy])

    return (
        <CryptoContext.Provider value={{cryptoInfo,searchResult,getSearchResult, setCoinSearched, setSearchResult, currency, setCurrency, setSortBy}}>
            {children}
        </CryptoContext.Provider>
    )
}