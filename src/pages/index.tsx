import Head from "next/head";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CodeBlock from "@/components/Code/CodeBlock";
import Code from "@/components/Code/Code";
import Clipboard from "@/components/Code/Clipboard";

import { Output as jsOutput } from "../code-examples/js-code";
import { Output as cppOutput } from "../code-examples/cpp-code";
import { Output as tsOutput } from "../code-examples/ts-code";
import { Output as goOutput } from "../code-examples/go-code";
import { Output as pyOutput } from "../code-examples/py-code";
import { Output as rustOutput } from "../code-examples/rs-code"

{
  /* ICON IMPORTS
  ====================================================================================================== */
}
import { IoMdPlanet } from "react-icons/io";
import { TbMath, TbMathSymbols } from "react-icons/tb";
import { FaRust, FaSpaceShuttle } from "react-icons/fa";
import { FaMeteor } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiRust,
  SiPython,
  SiPytorch,
  SiGit,
  SiVim,
  SiGo,
} from "react-icons/si";

{
  /* CHAKRA IMPORTS
  ====================================================================================================== */
}
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
  Badge,
} from "@chakra-ui/react";

export default function Home() {
  {
    /* TOP OF PAGE CARD */
  }
  const { ref: topRef, inView: topInView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  {
    /* JAVASCRIPT CARD */
  }
  const { ref: jsRef, inView: jsInView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  {
    /* JAVASCRIPT CARD */
  }
  const { ref: tsRef, inView: tsInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* C++ CARD */
  }
  const { ref: cppRef, inView: cppInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* GO CARD */
  }
  const { ref: goRef, inView: goInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* PYTHON CARD */
  }
  const { ref: pyRef, inView: pyInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* RUST CARD */
  }
  const { ref: rustRef, inView: rustInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <Head>
        <title>SpaceDocs.info</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br id="top-section" ref={topRef} />

      <Layout
        navChildren={
          <div>
            <nav>
              <p className="text-[20px] mb-3">SpaceDocs.info</p>
              <ul className="text-white">
                <Link href="#top-section">
                  <li
                    className={`${topInView ? "active-link" : "inactive-link"}`}
                  >
                    Top of Page
                  </li>
                </Link>
                <Link href="/">
                  <li>Home</li>
                </Link>
              </ul>
              <br />
              <p className="text-[20px] mb-3">Reference Guides</p>
              <ul>
              <Link href="#cpp-section">
                  <li
                    className={`${cppInView ? "active-link" : "inactive-link"}`}
                  >
                    C++ (coming soon)
                  </li>
                </Link>
                <Link href="#go-section">
                  <li
                    className={`${goInView ? "active-link" : "inactive-link"}`}
                  >
                    Go (coming soon)
                  </li>
                </Link>
                <Link href="#js-section">
                  <li
                    className={`${jsInView ? "active-link" : "inactive-link"}`}
                  >
                    JavaScript (ES6)
                  </li>
                </Link>
                <Link href="#ts-section">
                  <li
                    className={`${tsInView ? "active-link" : "inactive-link"}`}
                  >
                    TypeScript (coming soon)
                  </li>
                </Link>
                <Link href="#rust-section">
                  <li
                    className={`${rustInView ? "active-link" : "inactive-link"}`}
                  >
                    Rust (coming soon)
                  </li>
                </Link>
                
              </ul>
              <br />
            </nav>
          </div>
        }
      >
        <Header
          main_topic={"SpaceDocs.info"}
          topic_summary={
            <div>
              Explore a new world by learning a new technology!
              <br /> <br />
              <p className="pt-2">
                {" "}
                <span className="text-[#31cbff] font-bold">Current Guides</span>
                : JavaScript, TypeScript, C++, Go, Python, Rust (more coming
                soon...)
              </p>
              <p className="pt-2">
                {" "}
                <span className="text-[#31cbff] font-bold">Made with</span>:
                NextJS / TypeScript / TailwindCSS / ChakraUI / ❤️
              </p>
            </div>
          }
        >

        </Header>

        <div className="content-br"></div>
        <br id="cpp-section" className="content-br" />
        <div className="content-br"/>

        {/* C++ CARD
          ====================================================================================================== */}
        <div ref={cppRef} className={`${cppInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this bg-transparent">

            <Link href="./languages/c-plus-plus">
              <button
                className="w-[100px] block m-auto lg:ml-0 lg:mb-4 bg-[var(--bg-contrast)] text-black dark:text-white rounded-md p-2 
              border-2 border-black dark:border-[var(--dark-border)] mb-4"
              >
                C++
              </button>
            </Link>
            <p className="text-center lg:text-left text-black dark:text-white">
              Explore the C++ programming language!
            </p>
            <div className="text-center lg:text-left pt-2">
              <Badge className="mr-2" variant="outline" colorScheme="cyan">
                Console
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="purple">
                Desktop
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="pink">
                Games
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="blue">
                Mobile
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="gray">
                Server / Cloud
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="green">
                WEB
              </Badge>
            </div>
            <br />

            <CodeBlock codeBlockHeader={"output.cpp"}>
              <Code lang="cpp">{cppOutput}</Code>
            </CodeBlock>
            
          </div>
        </div>

        <div className="content-br"></div>
        <br id="go-section" className="content-br" />
        <div className="content-br"/>

        {/* GO CARD
          ====================================================================================================== */}
        <div ref={goRef} className={`${goInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this bg-transparent">

            <Link href="./languages/go">
              <button
                className="w-[100px] block m-auto lg:ml-0 lg:mb-4 bg-[var(--bg-contrast)] text-black dark:text-white rounded-md p-2 
              border-2 border-black dark:border-[var(--dark-border)] mb-4"
              >
                Go
              </button>
            </Link>
            <p className="text-center lg:text-left text-black dark:text-white">
              Explore the Go programming language!
            </p>
            <div className="text-center lg:text-left pt-2">
              <Badge className="mr-2" variant="outline" colorScheme="cyan">
                Console
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="purple">
                Desktop
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="pink">
                Games
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="blue">
                Mobile
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="gray">
                Server / Cloud
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="green">
                WEB
              </Badge>
            </div>
            <br />

            <CodeBlock codeBlockHeader={"output.ts"}>
              <Code lang="go">{goOutput}</Code>
            </CodeBlock>
            
          </div>
        </div>

        <div className="content-br"></div>
        <br id="js-section" className="content-br" />
        <div className="content-br"/>

        {/* JAVASCRIPT CARD
          ====================================================================================================== */}
        <div ref={jsRef} className={`${jsInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this bg-transparent">

            <Link href="./languages/javascript">
              <button
                className="block m-auto lg:ml-0 lg:mb-4 bg-[var(--bg-contrast)] text-black dark:text-white rounded-md p-2 
              border-2 border-black dark:border-[var(--dark-border)] mb-4"
              >
                JavaScript
              </button>
            </Link>
            <p className="text-center lg:text-left text-black dark:text-white">
              Explore the JavaScript programming Language!
            </p>
            <div className="text-center lg:text-left pt-2">
              <Badge className="mr-2" variant="outline" colorScheme="cyan">
                Console
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="purple">
                Desktop
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="pink">
                Games
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="blue">
                Mobile
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="gray">
                Server / Cloud
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="green">
                WEB
              </Badge>
            </div>
            <br />

            <CodeBlock codeBlockHeader={"output.js"}>
              <Code lang="javascript">{jsOutput}</Code>
            </CodeBlock>
            
          </div>
        </div>

        <div className="content-br"></div>
        <br id="ts-section" className="content-br" />
        <div className="content-br"/>

        {/* TYPESCRIPT CARD
          ====================================================================================================== */}
        <div ref={tsRef} className={`${tsInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this bg-transparent">

            <Link href="./languages/typescript">
              <button
                className="w-[100px] block m-auto lg:ml-0 lg:mb-4 bg-[var(--bg-contrast)] text-black dark:text-white rounded-md p-2 
              border-2 border-black dark:border-[var(--dark-border)] mb-4"
              >
                TypeScript
              </button>
            </Link>
            <p className="text-center lg:text-left text-black dark:text-white">
              Explore the TypeScript programming language!
            </p>
            <div className="text-center lg:text-left pt-2">
              <Badge className="mr-2" variant="outline" colorScheme="cyan">
                Console
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="purple">
                Desktop
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="pink">
                Games
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="blue">
                Mobile
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="gray">
                Server / Cloud
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="green">
                WEB
              </Badge>
            </div>
            <br />

            <CodeBlock codeBlockHeader={"output.ts"}>
              <Code lang="typescript">{tsOutput}</Code>
            </CodeBlock>
            
          </div>
        </div>

        <div className="content-br"></div>
        <br id="rust-section" className="content-br" />
        <div className="content-br"/>

        {/* RUST CARD
          ====================================================================================================== */}
        <div ref={rustRef} className={`${rustInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this bg-transparent">

            <Link href="./topics/languages/js">
              <button
                className="w-[100px] block m-auto lg:ml-0 lg:mb-4 bg-[var(--bg-contrast)] text-black dark:text-white rounded-md p-2 
              border-2 border-black dark:border-[var(--dark-border)] mb-4"
              >
                Rust
              </button>
            </Link>
            <p className="text-center lg:text-left text-black dark:text-white">
              Explore the Rust programming language!
            </p>
            <div className="text-center lg:text-left pt-2">
              <Badge className="mr-2" variant="outline" colorScheme="cyan">
                Console
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="purple">
                Desktop
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="pink">
                Games
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="blue">
                Mobile
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="gray">
                Server / Cloud
              </Badge>
              <Badge className="mr-2" variant="outline" colorScheme="green">
                WEB
              </Badge>
            </div>
            <br />

            <CodeBlock codeBlockHeader={"output.rs"}>
              <Code lang="typescript">{rustOutput}</Code>
            </CodeBlock>
            
          </div>
        </div>

        <div className="content-br" />
        <div className="content-br" />
        <div className="content-br" />
        <div className="content-br" />
        <div className="content-br" />
        <div className="content-br" />
        <div className="content-br" />
        <div className="content-br" />
        <div className="content-br" />
      </Layout>
    </>
  );
}
