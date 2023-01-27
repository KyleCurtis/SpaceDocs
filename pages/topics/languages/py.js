/* NPM IMPORTS
============================================================================ */
import Link from "next/link";
import Typewriter from "typewriter-effect";

/* COMPONENT IMPORTS
============================================================================ */
import MainLayout from "../../../components/Layouts/MainLayout";
import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";
import Code from "../../../components/Code/Code";
import Clipboard from "../../../components/Code/Clipboard";
import CodeBlock from "../../../components/Code/CodeBlock";
import Navbar from "../../../components/Navbar";
import NavDropdown from "../../../components/SideNav/NavDropdown";
import SideNav from "../../../components/SideNav/SideNav";

/* ICON IMPORTS
============================================================================ */
import { SiJavascript, SiPython } from "react-icons/si";

/* CHAKRA IMPORTS
============================================================================ */
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

/* CODE IMPORTS
============================================================================ */
import { HelloWorld } from "../../../code/py-code";

const PyPage = () => {
  return (
    <MainLayout title={"🚀 Rocket Docs: Python Page"}>
      <SideNav
        window={
          <div className="flex bg-white dark:bg-[var(--cat-mocha-crust)] m-auto shadow-sm shadow-black w-[120px] h-[120px] border-2 border-[var(--cat-mocha-text)] rounded-[100%] overflow-hidden">
            <SiPython className="!m-auto text-[var(--cat-mocha-core)] dark:text-[var(--cat-mocha-yellow)] bg-white dark:bg-[var(--cat-mocha-crust)] text-[70px] flex items-center" />
          </div>
        }
      >
        <br />
        <br />
        <Accordion allowMultiple>
          {/* (SIDENAV) HOME SECTION
        ====================================================================================================== */}
          <NavDropdown buttonTitle={"00. Getting Started"}></NavDropdown>

          {/* (SIDENAV) JAVASCRIPT BASICS SECTION
        ====================================================================================================== */}
          <NavDropdown
            buttonTitle={"01. Python Basics"}
            contentSection={
              <div>
                <ul>
                  <Link href="#hello-world">
                    <li>
                      <SiPython className="side-nav-js-logo" /> Hello,
                      World!
                    </li>
                  </Link>
                </ul>
              </div>
            }
          ></NavDropdown>
        </Accordion>

        <div className="content-br"></div>
      </SideNav>

      <Navbar />
      <Header>
        <h2 className="main-topic text-[var(--cat-mocha-blue)]">Python</h2>
        <div className="header-section">
          <div className="header-info text-[var(--cat-mocha-text)] font-bold">
            The programming language that powers:
            <Typewriter
              options={{
                strings: [
                  "Interactive Websites",
                  "Desktop Applications",
                  "Mobile Applications",
                  "Web Servers",
                  "Video Games",
                ],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </div>
        </div>
      </Header>

      <br />
      <br />

      <h2>Resources</h2>
      <br />

      <Dropdown
        buttonTitle={"Requirements"}
        contentSection={
          <div>
            <ul>
            <Link
                  className="text-blue-500"
                  target="_blank"
                  href="https://www.python.org/downloads/"
                >
              <li>Python (latest version)</li>
              </Link>
              <br />
              <li>
                -{" "}
                <Link
                  className="text-blue-500"
                  target="_blank"
                  href="https://code.visualstudio.com/"
                >
                  Visual Studio Code
                </Link>{" "}
                (Or preferred editor)
              </li>
            </ul>
          </div>
        }
      ></Dropdown>

      <br />

      <Dropdown
        buttonTitle={"Resources"}
        contentSection={"Coming Soon..."}
      ></Dropdown>

      <div className="content-br" id="hello-world"></div>

      {/* HELLO WORLD SECTION
      ====================================================================================================== */}
      <h3>Hello, World!</h3>
      <CodeBlock>
        <Clipboard code={HelloWorld}></Clipboard>
        <Code lang="cpp">{HelloWorld}</Code>
      </CodeBlock>
      <Dropdown
        buttonTitle={"Result"}
        contentSection={"Hello, World!"}
      ></Dropdown>

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
    </MainLayout>
  );
};

export default PyPage;
