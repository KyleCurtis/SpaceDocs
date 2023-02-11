import React from "react";
import Link from "next/link";
import Image from "next/image";

import DrawerNav from "./Drawer";

import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import {
  SiCplusplus,
  SiJavascript,
  SiPython,
} from "react-icons/si";

import { TbMath } from "react-icons/tb";

import ThemeToggler from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 bg-[var(--cat-mocha-crust)] border-solid border-b-2 border-[var(--cat-mocha-surface0)]">
      {/* NAVBAR COMPONENT
      ========================================================================================= */}
      <nav className="h-[80px] max-w-[100%] m-auto flex justify-end items-center p-2 text-black dark:text-[var(--cat-mocha-text)]">
        <Link href="/">
          <h2 className="nav-title absolute pl-[15px] left-0 top-4 font-bold text-[var(--cat-mocha-text)]">
            SpaceDocs
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
              <SiCplusplus className="text-2xl text-blue-400" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/topics/languages/go">
              <Image
                alt="test"
                width={27}
                height={27}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
              />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/topics/languages/py">
              <SiPython className="text-2xl text-yellow-400" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/topics/other/math">
              <TbMath className="text-2xl text-purple-400" />
            </Link>
          </li>
          <li className="p-4">
            <ThemeToggler />
          </li>
        </ul>

        {/* DRAWER COMPONENT
        ========================================================================================= */}
        
      </nav>
    </div>
  );
};

export default Navbar;
