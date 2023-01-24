import React from "react";
import Link from "next/link";

import DrawerNav from "./Drawer";

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

import {TbMath} from "react-icons/tb";

import ThemeToggler from "./ThemeToggle";

const Navbar = () => {

  return (
    <div className="fixed left-0 top-0 w-full z-10 bg-[var(--cat-mocha-crust)] border-solid border-b-[1px] border-[var(--cat-mocha-text)]">
      <nav className="h-[80px] max-w-[100%] m-auto flex justify-end items-center p-2 text-black dark:text-white">
        <Link href="/">
          <h2 className="absolute pl-[15px] left-0 top-5 font-bold text-3xl text-[var(--cat-mocha-blue)]">
            Rocket Docs
          </h2>
        </Link>
        {/* lg:flex nav topic buttons */}
        <ul className="hidden lg:flex">
        <li className="p-4">
            <Link href="/topics/languages/js">
              <SiJavascript className="text-2xl text-yellow-400 hover:text-yellow-100" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/topics/languages/cpp">
              <SiCplusplus className="text-2xl text-blue-400 hover:text-blue-300" />
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
            <Link href="/topics/other/math">
              <TbMath className="text-2xl text-purple-400" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <SiPytorch className="text-2xl text-red-400" />
            </Link>
          </li>
          <li className="p-4">
            <ThemeToggler />
          </li>
        </ul>
        <DrawerNav className=''></DrawerNav>
      </nav>
    </div>
  );
};

export default Navbar;
