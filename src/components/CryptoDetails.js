import React, { useContext, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
export default function CryptoDetails() {
  let { coinId } = useParams();
  let {getcoinInfo, coinInfo} = useContext(CryptoContext);
  useLayoutEffect(() => {
    getcoinInfo(coinId);

  }, [coinId]);



  return ReactDOM.createPortal(
    <div className="w-full h-full bg-zinc-900 bg-opacity-80 backdrop-blur-sm fixed top-0 flex justify-center items-center">
      <div className="w-[70%] h-[70%] bg-zinc-800 bg-opacity-90 rounded-md text-white">
        {coinInfo ? <h2>{coinInfo.id}</h2> : ""}
      </div>
    </div>,
    document.getElementById("model")
  );
}
