import React from "react";
import Link from "next/link";
import Image from "next/image";




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

import { SiCplusplus, SiJavascript, SiPython } from "react-icons/si";

import { FaHome } from "react-icons/fa";

import { TbMath } from "react-icons/tb";

import ThemeToggler from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 bg-white dark:bg-[var(--dark-bg)] border-solid border-b-2 border-[var(--mat-deep-border)]">
      {/* NAVBAR COMPONENT
      ========================================================================================= */}
      <nav className="h-[80px] max-w-[1100px] m-auto flex justify-start items-center p-2 text-black dark:text-[var(--cat-mocha-text)]">
        {/* lg:flex nav topic buttons */}
        <ul className="hidden lg:flex">
          <li className="p-4">
            <ThemeToggler />
          </li>
          <li className="p-4">
            <Link href="/">
              <FaHome className="text-2xl text-yellow-400 hover:text-white" />
            </Link>
          </li>
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
        </ul>

        {/* DRAWER COMPONENT
        ========================================================================================= */}
      </nav>
    </div>
  );
};

export default Navbar;
