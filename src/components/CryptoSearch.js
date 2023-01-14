import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import { CryptoContext } from "../context/CryptoContext";

const SearchInput = ({ handleDebounce }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
    handleDebounce(searchText);
  };
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
          className="w-full bg-zinc-600 rounded outline-0 p-1 border border-transparent focus:border-yellow-300"
          placeholder="search.."
        />
        <button type="submit">
          <i className="ri-find-replace-line text-yellow-400 text-xl"></i>
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className="bg-zinc-800 rounded absolute p-2 w-48 bg-opacity-90">
          <li>Abc</li>
          <li>Def</li>
          <li>Ghi</li>
          <li>Jkl</li>
        </ul>
      ) : null}
    </>
  );
};

export default function CryptoSearch() {
  const {getSearchResult} = useContext(CryptoContext);

  const debounceFunc = debounce((val) => {
    getSearchResult(val)
  },2000)

  
  return (
    <div>
      <SearchInput handleDebounce={debounceFunc}/>
    </div>
  );
}
