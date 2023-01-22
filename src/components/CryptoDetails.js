import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
export default function CryptoDetails() {
  let { coinId } = useParams();
  return ReactDOM.createPortal(
    <div className="w-full h-full bg-zinc-900 bg-opacity-80 backdrop-blur-sm fixed top-0 flex justify-center items-center">
      <div className="w-[70%] h-[70%] bg-zinc-800 bg-opacity-90 rounded-md text-white">
        {coinId}
      </div>
    </div>,
    document.getElementById("model")
  );
}
