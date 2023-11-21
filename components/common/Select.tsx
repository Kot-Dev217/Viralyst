import React from 'react';

const CustomSelect = () => {
  return (
    <div className="relative w-full">
      <select
        className="block w-full bg-black text-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="this">
          Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand
        </option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className="h-5 w-5 text-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-6-6h12l-6 6z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;
