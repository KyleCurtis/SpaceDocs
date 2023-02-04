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
    <div className="fixed left-0 top-0 w-full z-10 bg-[var(--cat-mocha-crust)] border-solid border-b-[1px] border-[var(--cat-mocha-text)]">
      {/* NAVBAR COMPONENT
      ========================================================================================= */}
      <nav className="h-[80px] max-w-[100%] m-auto flex justify-end items-center p-2 text-black dark:text-[var(--cat-mocha-text)]">
        <Link href="/">
          <h2 className="nav-title absolute pl-[15px] left-0 top-4 font-bold text-[var(--cat-mocha-text)]">
            SpaceDocs.info
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
        <DrawerNav className="">
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading size="md" className="text-[var(--cat-mocha-text)]">
                  {" "}
                  JavaScript
                </Heading>
              </CardHeader>
              <CardBody>
                <SiJavascript className="text-[var(--cat-mocha-yellow)] text-[100px] m-auto" />
                <br />
                <Text className="text-[var(--cat-mocha-text)]">
                  Learn the programming language that powers interactive
                  websites, video games, desktop applications, and more!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/languages/js">
                  <Button>Explore</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-[var(--cat-mocha-text)]" size="md">
                  C++
                </Heading>
              </CardHeader>
              <CardBody>
                <SiCplusplus className="text-[var(--cat-mocha-blue)] text-[100px] m-auto" />
                <br />
                <Text className="text-[var(--cat-mocha-text)]">
                  Learn the programming language that powers operating systems,
                  robotics, video games, desktop applications and more!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/languages/cpp">
                  <Button>Explore</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-[var(--cat-mocha-text)]" size="md">
                  {" "}
                  Python
                </Heading>
              </CardHeader>
              <CardBody>
                <SiPython className="text-[var(--cat-mocha-yellow)] text-[100px] m-auto" />
                <br />
                <Text className="text-[var(--cat-mocha-text)]">
                  Learn the programming language that powers Artificial
                  Intelligence, Machine Learning, Websites, automation,
                  mathematics, and more!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/languages/py">
                  <Button>Explore</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-[var(--cat-mocha-text)]" size="md">
                  {" "}
                  Mathematics
                </Heading>
              </CardHeader>
              <CardBody>
                <TbMath className="text-[var(--cat-mocha-teal)] text-[100px] m-auto" />
                <br />
                <Text className="text-[var(--cat-mocha-text)]">
                  Learn the version control tool that collaborators use to work
                  together around the world!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/other/math">
                  <Button>Explore</Button>
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </DrawerNav>
      </nav>
    </div>
  );
};

export default Navbar;
