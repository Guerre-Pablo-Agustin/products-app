"use client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import useProductStore from "../../store/ProductStore";

const Header = () => {

  const { language, setLanguage } = useProductStore();

  return (
    <div className=" bg-gray-800 px-8 py-2 flex justify-between gap-4 ">
      <div className="flex justify-between md:w-[50%] items-center">
        <Link href={`/`}>
        <h2 className="text-2xl font-bold text-white">Products App</h2>
        </Link>
      </div>
      <Navbar />
      <div className="flex items-center">
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-center"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

    </div>
  );
};

export default Header;
