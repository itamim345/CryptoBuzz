import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import { CryptoContext } from "../context/CryptoContext";

const SearchInput = ({ handleDebounce }) => {
  const [searchText, setSearchText] = useState("");
  let { searchResult, setCoinSearched, setSearchResult } =
    useContext(CryptoContext);

  const handleSearch = (event) => {
    event.preventDefault();
    const inputText = event.target.value;
    setSearchText(inputText);
    handleDebounce(searchText);
  };
  const selectCoinSet = (coin) => {
    setCoinSearched(coin);
    setSearchText("");
    setSearchResult("");
  }
  return (
    <>
      <form
        onChange={handleSearch}
        value={searchText}
        className="flex gap-1 items-center w-25"
      >
        <input
          type="text"
          name="searchInput"
          className="w-full bg-zinc-600 rounded outline-0 p-1 border border-transparent focus:border-yellow-300 outline-none"
          placeholder="search.."
        />
        <button type="submit">
          <i className="ri-find-replace-line text-yellow-400 text-xl"></i>
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className="bg-zinc-800 rounded absolute p-2 w-48 h-[50vh] overflow-y-scroll bg-opacity-90">
          {searchResult.length > 0 ? (
            searchResult.map((coin) => {
              return (
                <li
                  key={coin.id}
                  onClick={() => selectCoinSet(coin.id)}
                  className="flex items-center gap-2 py-2"
                >
                  <img src={coin.thumb} alt={coin.thumb} className="h-6 w-6" />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="h-full w-full flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-yellow-400 rounded-full animate-spin border-b-black"></div>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

export default function CryptoSearch() {
  const { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce((val) => {
    getSearchResult(val);
  }, 2000);

  return (
    <div>
      <SearchInput handleDebounce={debounceFunc} />
    </div>
  );
}
