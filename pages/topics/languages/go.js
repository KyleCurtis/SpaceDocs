/* NPM IMPORTS
============================================================================ */
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";

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
import { SiGo, SiJava, SiJavascript, SiPython } from "react-icons/si";

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
import { HelloWorld } from "../../../code/cpp-code";

const GoPage = () => {
  return (
    <MainLayout title={"🚀 Rocket Docs: Go Page"}>
      <SideNav
        window={
          <div className="flex bg-white dark:bg-[var(--cat-mocha-crust)] m-auto shadow-sm shadow-black w-[120px] h-[120px] border-2 border-[var(--cat-mocha-text)] rounded-[100%] overflow-hidden">
            <Image
              alt="test"
              width={75}
              height={75}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
              className="m-auto"
            />
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
            buttonTitle={"01. Go Basics"}
            contentSection={
              <div>
                <ul>
                  <Link href="#hello-world">
                    <li>
                      <SiJavascript className="side-nav-js-logo" /> Hello,
                      World!
                    </li>
                  </Link>
                  <Link href="#comments">
                    <li>
                      <SiJavascript className="side-nav-js-logo" /> Comments
                    </li>
                  </Link>
                  <Link href="#variables">
                    <li>
                      <SiJavascript className="side-nav-js-logo" /> Variables
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
        <h2 className="main-topic text-[var(--cat-mocha-blue)]">Go</h2>
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

      <div className="content-br"></div>
    </MainLayout>
  );
};

export default GoPage;
