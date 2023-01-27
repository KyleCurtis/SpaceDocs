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
import { SiCplusplus } from "react-icons/si";

import { Accordion } from "@chakra-ui/react";

/* CODE IMPORTS
============================================================================ */
import { HelloWorld, Comments } from "../../../code/cpp-code";

const CppPage = () => {
  return (
    <MainLayout title={"🚀 Rocket Docs: C++ Page"}>
      <SideNav
        window={
          <div className="flex bg-white dark:bg-[var(--cat-mocha-crust)] m-auto shadow-sm shadow-black w-[120px] h-[120px] border-2 border-[var(--cat-mocha-text)] rounded-[100%] overflow-hidden">
            <SiCplusplus className="!m-auto text-[var(--cat-mocha-core)] bg-white dark:bg-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)] text-[80px] flex items-center" />
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
            buttonTitle={"01. C++ Basics"}
            contentSection={
              <div>
                <ul>
                  <Link href="#hello-world">
                    <li>
                      <SiCplusplus className="side-nav-js-logo" /> Hello,
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
        <h2 className="main-topic text-[var(--cat-mocha-blue)]">C++</h2>
        <div className="header-section">
          <div className="header-info text-[var(--cat-mocha-text)] font-bold">
            The systems programming language that powers:
            <Typewriter
              options={{
                strings: [
                  "Operating Systems",
                  "Desktop Applications",
                  "Web-browsers",
                  "Game Engines",
                  "Robots",
                  "Machine Learning",
                  "AI",
                  "Rockets",
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
              <li>C++ Compiler (gcc/++, MSVC, Clang, etc.)</li>
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
      <div className="content-br"></div>
    </MainLayout>
  );
};

export default CppPage;
