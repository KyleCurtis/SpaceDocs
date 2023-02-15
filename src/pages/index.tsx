{
    /* NPM IMPORTS
  ====================================================================================================== */
  }
  import { useInView } from "react-intersection-observer";
  import Head from "next/head";
  import Link from "next/link";
  import Image from "next/image";
  
  {
    /* COMPONENT IMPORTS
  ====================================================================================================== */
  }
  import Navbar from "../components/Navbar";
  import Header from "../components/Header";
  import MainLayout from "../components/Layouts/MainLayout";
  import SideNav from "../components/SideNav/SideNav";
  import NavDropdown from "../components/SideNav/NavDropdown";
  import Code from "../components/Code/Code";
  import CodeBlock from "../components/Code/CodeBlock";
  
  import { Output as jsOutput } from "../code-examples/js-code";

  import { Output as cppOutput } from "../code-examples/cpp-code";

  import { Output as tsOutput } from "../code-examples/ts-code"

  {
    /* ICON IMPORTS
  ====================================================================================================== */
  }
  import { IoMdPlanet } from "react-icons/io";
  import { TbMath, TbMathSymbols } from "react-icons/tb";
  import { FaRust, FaSpaceShuttle } from "react-icons/fa";
  import { FaMeteor } from "react-icons/fa";
  
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
  
  /* HOME PAGE
  ====================================================================================================== */
  export default function Home() {
  
    {/* JAVASCRIPT CARD */}
    const { ref: jsRef, inView: jsInView } = useInView({
      threshold: 0.3,
      triggerOnce: false,
    });

    {/* JAVASCRIPT CARD */}
    const { ref: tsRef, inView: tsInView } = useInView({
      threshold: 0.3,
      triggerOnce: false,
    });
  
    {/* C++ CARD */}
    const { ref: cppRef, inView: cppInView } = useInView({
      threshold: 0.3,
      triggerOnce: false,
    });
  
    {/* PYTHON CARD */}
    const { ref: pyRef, inView: pyInView } = useInView({
      threshold: 0.3,
      triggerOnce: false,
    });
  
  
    return (
      <MainLayout title={"SpaceDocs: Home Page"}>
        <Head>
          <meta
            name="description"
            content="A space-themed minimal documentation site for learning various technologies."
          />
        </Head>
        <SideNav
          window={
            <div className="flex bg-white dark:bg-[var(--mat-dark-bg)] m-auto shadow-sm shadow-black w-[120px] h-[120px] border-2 border-[var(--cat-mocha-text)] rounded-[100%] overflow-hidden">
              <IoMdPlanet className="!m-auto text-[var(--cat-mocha-core)] dark:text-[var(--cat-mocha-text)] bg-white dark:bg-[var(--mat-dark-bg)] text-[80px] flex items-center" />
            </div>
          }
        >
          <br />
          <br />
          <div>
                <p className="text-blue-300 pl-2 text-lg border-b">Topics</p>
                <ul className="text-white">
                <Link href="/topics/languages/js">
                    <li className={`${jsInView ? 'active-link' : 'inactive-link'}`}>JavaScript (ES6)</li>
                  </Link>
                  <Link href="/topics/languages/ts">
                    <li className={`${tsInView ? 'active-link' : 'inactive-link'}`}>TypeScript</li>
                  </Link>
                  <Link href="#cpp">
                    <li className={`${cppInView ? 'active-link' : 'inactive-link'}`}>C++ (20)</li>
                  </Link>
                  <Link href="#variables">
                    <li>Go (1.x)</li>
                  </Link>
                  <Link href="/topics/languages/py">
                    <li>Python (3.x)</li>
                  </Link>
                  <Link href="/topics/languages/py">
                    <li>Rust (1.x)</li>
                  </Link>
                </ul>
              </div>
              <p className="text-blue-300 pl-2 text-lg border-b">Other</p>
              <div>
                <ul>
                  <Link href="/topics/other/math">
                    <li>
                      <TbMathSymbols className="side-nav-js-logo" /> Mathematics
                    </li>
                  </Link>
                </ul>
              </div>
        </SideNav>
        <Navbar />
        <Header
          main_topic={"SpaceDocs.info"}
          topic_summary={"Explore a new world by learning a new technology!"}
        />


<div className="content-br"></div>
        <div className="h-0 border-[1px] border-[var(--mat-dark-border)]"></div>
        <div className="content-br"></div>

        {/* JAVASCRIPT CARD
          ====================================================================================================== */}
        <div ref={jsRef} className={`mx-[18%] ${jsInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this bg-transparent">
            <br />
            <SiJavascript className="text-[#ead41c] text-[100px] m-auto" />
            <br />
            <p className="card-header text-center text-[var(--mat-dark-text)]">
              JavaScript
            </p>
            <p className="mx-[18%] text-center text-[var(--mat-dark-text)]">
              Explore the programming language that powers the interactive web!
            </p>
            <div className="text-center pt-2">
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
  
            <CodeBlock>
              <Code lang="javascript">{jsOutput}</Code>
            </CodeBlock>
  
            <button
              className="block bg-[var(--cat-mocha-base)] m-auto text-white dark:text-[#ead41c] rounded-md p-2 
              border-2 border-black dark:border-[var(--cat-mocha-surface1)]"
            >
              Explore JavaScript!
            </button>
          </div>
        </div>

        <div className="content-br"></div>
        <div className="h-0 border-[1px] border-[var(--mat-dark-border)]"></div>
        <div className="content-br"></div>

        {/* TYPESCRIPT CARD
          ====================================================================================================== */}
        <div ref={tsRef} className={`mx-[18%] ${tsInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this bg-transparent">
            <br />
            <SiTypescript className="text-[#3178c6] text-[100px] m-auto" />
            <br />
            <p className="card-header text-center text-[var(--mat-dark-text)]">
              TypeScript
            </p>
            <p className="text-center text-[var(--mat-dark-text)]">
              Explore the programming language that powers the interactive web!
            </p>
            <div className="text-center pt-2">
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
  
            <CodeBlock>
              <Code lang="typescript">{tsOutput}</Code>
            </CodeBlock>
  
            <button
              className="block bg-[var(--cat-mocha-base)] m-auto text-white dark:text-[#ead41c] rounded-md p-2 
              border-2 border-black dark:border-[var(--cat-mocha-surface1)]"
            >
              Explore TypeScript!
            </button>
          </div>
        </div>
  
        <div className="content-br"></div>
        <div className="h-0 border-[1px] border-[var(--mat-dark-border)]"></div>
        <div className="content-br"></div>
  
        {/* C++ CARD
          ====================================================================================================== */}
         <div id="cpp" ref={cppRef} className={`h-screen ${cppInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this rounded-xl border-2 border-black dark:border-[var(--cat-mocha-surface1)]">
            <br />
            <SiCplusplus className="mt-7 text-[#6295cb] text-[100px] m-auto" />
            <br />
            <p className="card-header text-center text-black dark:text-[var(--cat-mocha-text)]">
              C-Plus-Plus
            </p>
            <p className="text-black text-center dark:text-[var(--cat-mocha-text)]">
              Explore the programming language that powers the interactive web!
            </p>
            <div className="text-center pt-2">
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
            <br />
            <button
              className="block bg-[var(--cat-mocha-base)] m-auto text-white dark:text-[#ead41c] rounded-md p-2 
              border-2 border-black dark:border-[var(--cat-mocha-surface1)]"
            >
              Explore C++
            </button>
            <br />
  
            <CodeBlock>
              <Code lang="cpp">{cppOutput}</Code>
            </CodeBlock>
          </div>
          </div>
  
  
        <div className="content-br"></div>
  
          {/* PYTHON CARD
          ====================================================================================================== */}
         <div ref={pyRef} className={`${pyInView ? "fadeIn" : "fadeInDefault"}`}>
          <div className="animate-this p-10 rounded-xl border-2 border-black dark:border-[var(--cat-mocha-surface1)]">
            <br />
            <SiPython className="mt-7 text-[#ffd343] text-[100px] m-auto" />
            <br />
            <p className="card-header text-center text-black dark:text-[var(--cat-mocha-text)]">
              Python
            </p>
            <p className="text-black text-center dark:text-[var(--cat-mocha-text)]">
              Explore the programming language that powers the interactive web!
            </p>
            <div className="text-center pt-2">
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
            <br />
            <button
              className="block bg-[var(--cat-mocha-base)] m-auto text-white dark:text-[#ffd343] rounded-md p-2 
              border-2 border-black dark:border-[var(--cat-mocha-surface1)]"
            >
              Explore C++
            </button>
            <br />
  
            <CodeBlock>
              <Code lang="cpp">{cppOutput}</Code>
            </CodeBlock>
          </div>
          </div>
  
  
        <div className="content-br"></div>
  
  
        {/* PYTHON CARD
          ====================================================================================================== */}
        <div className="text-center rounded-xl border-2 border-black dark:border-[#ffd343]">
          <br />
          <SiPython className="mt-7 text-[#ffd343] text-[100px] m-auto" />
          <br />
          <p className="card-header text-black dark:text-[var(--cat-mocha-text)]">
            Python
          </p>
          <p className="text-black dark:text-[var(--cat-mocha-text)]">
            Explore one of the fastest systems programming languages!
          </p>
          <div className="text-center pt-2">
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
          <button
            className="bg-[var(--cat-mocha-base)] text-white dark:text-[#ffd343] rounded-md p-2 
              border-2 border-black dark:border-[var(--cat-mocha-surface1)]"
          >
            Explore!
          </button>
          <br />
          <br />
        </div>
  
        
        <div className="content-br"></div>
  
        {/* FAQ CARD
          ====================================================================================================== */}
        <div className="bg-[var(--cat-mocha-surface1)] rounded-xl overflow-hidden">
          <div>
            <p className="card-header font-bold text-center text-white p-2">
              FAQ
            </p>
          </div>
          <div className="text-[var(--cat-mocha-text)] text-center bg-[var(--cat-mocha-base)]">
            <p className="text-center font-bold p-3 text-[var(--cat-mocha-blue)]">
              Q: Test?
            </p>
            <p className="max-w-[600px] px-[50px] m-auto">A: Test</p>
            <br />
            <br />
            <p className="text-center font-bold p-3 text-[var(--cat-mocha-blue)]">
              Q: Test?
            </p>
            <p className="max-w-[600px] px-[50px] m-auto">A: Test</p>
            <br />
            <br />
          </div>
        </div>
        <div className="content-br"></div>
        <FaMeteor className="m-auto text-white text-[100px]" />
  
        <div className="content-br"></div>
  
        {/* INFO CARD
          ====================================================================================================== */}
        <div className="bg-[var(--cat-mocha-surface1)] rounded-xl overflow-hidden">
          <div className="">
            <p className="card-header text-center text-white p-2">
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
            <br />
            <br />
            Site Colors:{" "}
            <a
              href="https://github.com/catppuccin/catppuccin"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              <p>Material Darker</p>
            </a>
            <br />
            Code Theme: <br />
            Visual Studio Code Dark
            <br /> <br />
          </div>
        </div>
        <br />
        <br />
        <div className="content-br"></div>
      </MainLayout>
    );
  }
  