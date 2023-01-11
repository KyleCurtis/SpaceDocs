import React, { useState } from "react";
import Link from "next/link";

import { SiCplusplus, SiJavascript, SiRust, SiPython, SiPytorch, SiGit, SiVim } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Rocket from "../public/Space.png"

import ThemeToggler from "./ThemeToggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in durration-300 bg-[#11111b] border-b-2">
      <nav className="h-20 max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
        
        <Link href='/'>
            <h2 className="font-bold text-3xl">🚀 Rocket Docs</h2>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/topics/languages/cpp">
              <SiCplusplus className="text-2xl text-blue-400 hover:text-blue-300" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiJavascript className="text-2xl text-yellow-400 hover:text-yellow-100" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiRust className="text-2xl text-orange-400 hover:text-orange-100" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiPython className="text-2xl text-yellow-400" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiPytorch className="text-2xl text-red-400" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiGit className="text-2xl text-orange-400" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiVim className="text-2xl text-green-400" />
            </Link>
          </li>
          <li className="p-4">
          <ThemeToggler />
          </li>
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#11111b] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#11111b] text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/topics/languages/cpp">C++</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">JS</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Go</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Rust</Link>
            </li>
            <li>
              <Link href="/">Python</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
