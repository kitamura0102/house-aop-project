import React from "react";
export default function Header() {
  return (
    <header className="bg-cover bg-center h-big flex">
      <div className="search-box flex flex-col justify-center items-center w-2/3 flex-nowrap">
        <h1 className="text-white font-bold text-6xl py-6">
          Agents. Tours. <br /> Loans. Homes.
        </h1>
        <div className="search flex">
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            className="h-16 w-96 rounded-s-xl text-black ml-6 p-4"
            id="input-search"
          />
          <button className="w-16 border-none flex justify-center items-center bg-white p-3 rounded-r-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 "
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
