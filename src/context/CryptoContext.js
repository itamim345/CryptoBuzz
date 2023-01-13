import { createContext, useLayoutEffect, useState } from "react";

//Context Object
export const CryptoContext = createContext({});

//Provider
export const CryptoProvider = ({children}) => {
    const [cryptoInfo, setCryptoInfo] = useState();

    const getcryptoInfo = async() => {
        try {
            const info = await fetch(
              `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
            ).then(resp => resp.json()).then(data => data)
            setCryptoInfo(info);
        } catch (error) {
            console.log(error);
        }
    }
    useLayoutEffect(() => {
      getcryptoInfo();
    }, []);
    return (
        <CryptoContext.Provider value={{cryptoInfo}}>
            {children}
        </CryptoContext.Provider>
    )
}