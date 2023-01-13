import React, { useState } from "react";

export default function CryptoSearch() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  };
  return (
    <div>
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
    </div>
  );
}
