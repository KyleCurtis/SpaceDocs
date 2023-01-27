import Head from "next/head";
import { Inter } from "@next/font/google";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

import Header from "../components/Header";
import SideNav from "../components/SideNav/SideNav";
import NavDropdown from "../components/SideNav/NavDropdown";

import { IoMdRocket } from "react-icons/io";

import Image from "next/image";

import {
  SiCplusplus,
  SiJavascript,
  SiRust,
  SiPython,
  SiPytorch,
  SiGit,
  SiVim,
  SiGo,
} from "react-icons/si";

import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

import { TbMath } from "react-icons/tb";
import Link from "next/link";

import { TbMathSymbols } from "react-icons/tb";
import MainLayout from "../components/Layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout title={"🚀 Rocket Docs: Home Page"}>
      <SideNav
        window={
          <div className="flex bg-white dark:bg-[var(--cat-mocha-crust)] m-auto shadow-sm shadow-black w-[120px] h-[120px] border-2 border-[var(--cat-mocha-text)] rounded-[100%] overflow-hidden">
            <IoMdRocket className="!m-auto text-[var(--cat-mocha-core)] dark:text-[var(--cat-mocha-text)] bg-white dark:bg-[var(--cat-mocha-crust)] text-[80px] flex items-center" />
          </div>
        }
      >
        <br />
        <br />
        <NavDropdown buttonTitle={"00. Getting Started"}></NavDropdown>
        <NavDropdown
          buttonTitle={"01. Languages"}
          contentSection={
            <div>
              <ul>
                <Link href="/topics/languages/js">
                  <li>
                    <SiJavascript className="side-nav-js-logo" /> JavaScript
                  </li>
                </Link>
                <Link href="/topics/languages/cpp">
                  <li>
                    <SiCplusplus className="inline text-[var(--cat-mocha-blue)]" />{" "}
                    C++
                  </li>
                </Link>
                <Link href="#variables">
                  <li>
                    <Image
                      alt="test"
                      width={15}
                      height={15}
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                      className="inline"
                    />{" "}
                    Go
                  </li>
                </Link>
                <Link href="/topics/languages/py">
                  <li>
                    <SiPython className="inline text-[var(--cat-mocha-yellow)]" />{" "}
                    Python
                  </li>
                </Link>
              </ul>
            </div>
          }
        ></NavDropdown>
        <NavDropdown
          buttonTitle={"02. Other"}
          contentSection={
            <div>
              <ul>
                <Link href="/topics/other/math">
                  <li>
                    <TbMathSymbols className="side-nav-js-logo" /> Mathematics
                  </li>
                </Link>
              </ul>
            </div>
          }
        ></NavDropdown>
      </SideNav>

      <Navbar />

      <Header>
        <h1 className="main-topic">Home</h1>
        <div className="header-info">
          Explore a new world by learning a new skill such as:
          <Typewriter
            options={{
              strings: [
                "Algebra",
                "C++",
                "JavaScript",
                "Rust",
                "Python",
                "PyTorch",
              ],
              autoStart: true,
              loop: true,
            }}
          ></Typewriter>
        </div>
      </Header>

      <div className="content-br"></div>

      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
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
            <p className="text-center text-[var(--cat-mocha-red)]">⚠️ WORK IN PROGRESS ⚠️</p>
            <br />
            <Text className="text-[var(--cat-mocha-text)]">
              Learn the programming language that powers interactive websites,
              video games, desktop applications, and more!
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="/topics/languages/js">
              <Button
                _hover={"none"}
                _active={{
                  transform: "scale(0.95)",
                }}
                className="bg-white dark:bg-[var(--cat-mocha-crust)] text-black dark:text-[var(--cat-mocha-text)]"
              >
                Learn
              </Button>
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
            <p className="text-center text-[var(--cat-mocha-red)]">⚠️ WORK IN PROGRESS ⚠️</p>
            <br />
            <Text className="text-[var(--cat-mocha-text)]">
              Learn the programming language that powers operating systems,
              robotics, video games, desktop applications and more!
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="/topics/languages/cpp">
              <Button
                _hover={"none"}
                _active={{
                  transform: "scale(0.95)",
                }}
                className="bg-white dark:bg-[var(--cat-mocha-crust)] text-black dark:text-[var(--cat-mocha-text)]"
              >
                Learn
              </Button>
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
            <p className="text-center text-[var(--cat-mocha-red)]">⚠️ WORK IN PROGRESS ⚠️</p>
            <br />
            <Text className="text-[var(--cat-mocha-text)]">
              Learn the programming language that powers Artificial
              Intelligence, Machine Learning, Websites, automation, mathematics,
              and more!
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="/topics/languages/py">
              <Button
                _hover={"none"}
                _active={{
                  transform: "scale(0.95)",
                }}
                className="bg-white dark:bg-[var(--cat-mocha-crust)] text-black dark:text-[var(--cat-mocha-text)]"
              >
                Learn
              </Button>
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
            <p className="text-center text-[var(--cat-mocha-red)]">⚠️ WORK IN PROGRESS ⚠️</p>
            <br />
            <Text className="text-[var(--cat-mocha-text)]">
              Learn the version control tool that collaborators use to work
              together around the world!
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="/topics/other/math">
              <Button
                _hover={"none"}
                _active={{
                  transform: "scale(0.95)",
                }}
                className="bg-white dark:bg-[var(--cat-mocha-crust)] text-black dark:text-[var(--cat-mocha-text)]"
              >
                Learn
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <div className="content-br"></div>

      <div className="bg-[var(--cat-mocha-surface1)] rounded-xl overflow-hidden">
        <div className="">
          <p className="card-header text-center text-white p-5">
            Rocket Docs Info
          </p>
        </div>
        <div className="text-white text-center bg-[var(--cat-mocha-base)]">
          <p className="card-section-header text-center p-3 text-white">
            Built With
          </p>
          <a
            href="https://nextjs.org/"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            NextJS
          </a>{" "}
          /
          <a
            href="https://tailwindcss.com/"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            TailwindCSS
          </a>{" "}
          /{" "}
          <a
            href="https://sass-lang.com/"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            SCSS{" "}
          </a>
          /{" "}
          <a
            href="https://chakra-ui.com/"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            ChakraUI{" "}
          </a>
          / ❤️
        <br /><br />
        Site Colors:{" "}
                <a
                  href="https://github.com/catppuccin/catppuccin"
                  className="text-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Catppuccin Mocha</p>
                </a>
                <br />
                Code Theme: <br />
                Atom One Dark (Modified)
                <br /> <br/>
                </div>
      </div>

      <br />
      <br />
      <div className="content-br"></div>
    </MainLayout>
  );
}
