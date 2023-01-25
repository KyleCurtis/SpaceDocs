import Head from "next/head";
import { Inter } from "@next/font/google";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

import Header from "../components/Header";
import SideNav from "../components/SideNav/SideNav";
import NavDropdown from "../components/SideNav/NavDropdown";

import {
  SiCplusplus,
  SiJavascript,
  SiRust,
  SiPython,
  SiPytorch,
  SiGit,
  SiVim,
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
} from "@chakra-ui/react";

import { TbMath } from "react-icons/tb";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SideNav>
        <br />
        <br />
        <NavDropdown buttonTitle={"00. Getting Started"}></NavDropdown>
        <NavDropdown buttonTitle={"01. Languages"}></NavDropdown>
        <NavDropdown buttonTitle={"02. Other"}></NavDropdown>
      </SideNav>

      <Navbar />
      <Head>
        <title>Rocket Docs</title>
      </Head>

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
              Learn the programming language that powers interactive websites,
              video games, desktop applications, and more!
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
              Intelligence, Machine Learning, Websites, automation, mathematics,
              and more!
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
              Learn the machine learning framework that companies like OpenAI
              use to develop their tools!
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

      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
    </>
  );
}
