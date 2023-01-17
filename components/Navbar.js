import React, { useState } from "react";
import Link from "next/link";

import {
  SiCplusplus,
  SiJavascript,
  SiRust,
  SiPython,
  SiPytorch,
  SiGit,
  SiVim,
} from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import ThemeToggler from "./ThemeToggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 bg-[var(--cat-mocha-crust)] border-solid border-b-2 border-black dark:border-[var(--cat-mocha-text)]">
      <nav className="h-20 max-w-[100%] m-auto flex justify-between items-center p-2 text-black dark:text-white">
        <Link href="/">
          <h2 className="font-bold text-3xl text-[var(--cat-mocha-text)]">
            🚀RocketDocs
          </h2>
        </Link>
        {/* lg:flex nav topic buttons */}
        <ul className="hidden lg:flex">
          <li className="p-4">
            <Link href="/topics/languages/cpp">
              <SiCplusplus className="text-2xl text-blue-400 hover:text-blue-300" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/topics/languages/js">
              <SiJavascript className="text-2xl text-yellow-400 hover:text-yellow-100" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiPython className="text-2xl text-yellow-400" />
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

        {/* lg:hidden nav button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[white] text-black dark:bg-[var(--cat-mocha-crust)] dark:text-white text-center"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[white] text-black dark:bg-[var(--cat-mocha-crust)] dark:text-white text-center"
          }
        >
          <ul>
            <li className="m-auto w-10 h-20">
              <ThemeToggler />
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#">Back to top</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/topics/languages/cpp">C++</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/topics/languages/js">JS</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Rust</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Python</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
