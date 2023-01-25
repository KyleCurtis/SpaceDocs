import React from "react";
import Link from "next/link";

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
  SiRust,
  SiPython,
  SiPytorch,
  SiGit,
  SiVim,
} from "react-icons/si";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { TbMath } from "react-icons/tb";

import ThemeToggler from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 bg-[var(--cat-mocha-crust)] border-solid border-b-[1px] border-[var(--cat-mocha-text)]">
      <nav className="h-[80px] max-w-[100%] m-auto flex justify-end items-center p-2 text-black dark:text-white">
        <Link href="/">
          <h2 className="nav-title absolute pl-[15px] left-0 top-5 font-bold text-3xl text-[var(--cat-mocha-blue)]">
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
        <DrawerNav className="">
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading size="md" className="text-white">
                  {" "}
                  JavaScript
                </Heading>
              </CardHeader>
              <CardBody>
                <SiJavascript className="text-[var(--cat-mocha-yellow)] text-[100px] m-auto" />
                <br />
                <Text className="text-white">
                  Learn the programming language that powers interactive
                  websites, video games, desktop applications, and more!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/languages/js">
                  <Button>Learn</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-white" size="md">
                  C++
                </Heading>
              </CardHeader>
              <CardBody>
                <SiCplusplus className="text-[var(--cat-mocha-blue)] text-[100px] m-auto" />
                <br />
                <Text className="text-white">
                  Learn the programming language that powers operating systems,
                  robotics, video games, desktop applications and more!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/languages/cpp">
                  <Button>Learn</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-white" size="md">
                  {" "}
                  Python
                </Heading>
              </CardHeader>
              <CardBody>
                <SiPython className="text-[var(--cat-mocha-yellow)] text-[100px] m-auto" />
                <br />
                <Text className="text-white">
                  Learn the programming language that powers Artificial
                  Intelligence, Machine Learning, Websites, automation,
                  mathematics, and more!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/languages/py">
                  <Button>Learn</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-white" size="md">
                  {" "}
                  PyTorch
                </Heading>
              </CardHeader>
              <CardBody>
                <SiPytorch className="text-[var(--cat-mocha-red)] text-[100px] m-auto" />
                <br />
                <Text className="text-white">
                  Learn the machine learning framework that companies like
                  OpenAI use to develop their tools!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/other/pytorch">
                  <Button>Learn</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-white" size="md">
                  {" "}
                  Git(hub)
                </Heading>
              </CardHeader>
              <CardBody>
                <SiGit className="text-[var(--cat-mocha-peach)] text-[100px] m-auto" />
                <br />
                <Text className="text-white">
                  Learn the version control tool that collaborators use to work
                  together around the world!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/other/git">
                  <Button>Learn</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="!bg-[var(--cat-mocha-base)]">
              <CardHeader>
                <Heading className="text-white" size="md">
                  {" "}
                  Mathematics
                </Heading>
              </CardHeader>
              <CardBody>
                <TbMath className="text-[var(--cat-mocha-teal)] text-[100px] m-auto" />
                <br />
                <Text className="text-white">
                  Learn the version control tool that collaborators use to work
                  together around the world!
                </Text>
              </CardBody>
              <CardFooter>
                <Link href="/topics/other/math">
                  <Button>Learn</Button>
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
