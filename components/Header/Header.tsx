"use client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className=" bg-gray-800 px-8 py-2 flex justify-between gap-4 ">
      <div className="flex justify-between md:w-[50%] items-center">
        <Link href={`/`}>
        <h2 className="text-2xl font-bold text-white">Products App</h2>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
