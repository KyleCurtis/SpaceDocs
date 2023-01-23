/* NPM IMPORTS
============================================================================ */
import Link from "next/link";
import Typewriter from "typewriter-effect";

/* COMPONENT IMPORTS
============================================================================ */
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
import { SiJavascript } from "react-icons/si";


/* CODE IMPORTS
============================================================================ */
import {
    HelloWorld,
    Comments,
  } from "../../../code/cpp-code";

const CppPage = () => {
  return (
    <>
    <SideNav>
        {/* (SIDENAV) HOME SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"01. Home"}>
          <ul className="side-nav-ul">
            <li>🏠 Home</li>
            <li>🤝 About</li>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) JAVASCRIPT SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"02. C++ Basics"}>
          <ul>
            <Link href="#hello-world">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Hello, World!
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
        </NavDropdown>

        {/* (SIDENAV) DATA TYPES SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"03. Data Types"}>
          <ul>
            <Link href="#data-types">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Value Types
              </li>
            </Link>
            <Link href="#type-checking">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Type Checking
                (typeof)
              </li>
            </Link>
            <Link href="#type-conversions">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Type Conversions
              </li>
            </Link>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) REFERENCE TYPES SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"04. Reference Types"}>
          <ul>
            <Link href="#objects">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Objects
              </li>
            </Link>
            <Link href="#arrays">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Arrays
              </li>
            </Link>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) OBJECTS SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"05. Objects"}>
          <ul>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) CONTROL FLOW SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"06. Control Flow"}>
          <ul>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) FUNCTIONS SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"07. Functions"}>
          <ul>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) PROTOTYPICAL INHERITANCE SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"08. Prototypical Inheritance"}>
          <ul>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) CLASSES SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"09. Beyond JavaScript"}>
          <ul>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
            <Link href="#">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Example
              </li>
            </Link>
          </ul>
        </NavDropdown>

        {/* (SIDENAV) OTHER SECTION
        ====================================================================================================== */}
        <NavDropdown triggerWord={"10. Useful JS Tooling"}>
          <ul>
            <Link href="#functions">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Functions
              </li>
            </Link>
          </ul>
        </NavDropdown>

        <NavDropdown triggerWord={"Operators"}>
          <ul>
            <Link href="#arithmetic-operators">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Arithmetic
                Operators
              </li>
            </Link>
            <Link href="#plus-minus-operators">
              <li>
                <SiJavascript className="side-nav-js-logo" /> ++/-- Operators
              </li>
            </Link>
            <Link href="#assignment-operators">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Assignment
                Operators
              </li>
            </Link>
            <Link href="#comparison-operators">
              <li>
                <SiJavascript className="side-nav-js-logo" /> Comparison
                Operators
              </li>
            </Link>
          </ul>
        </NavDropdown>
        <div className="content-br"></div>
      </SideNav>

      <Navbar />

      <Header>
        <h1 className="text-[var(--cat-mocha-blue)]">C++</h1>
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

      <div className="content-br"></div>

      <h2>Resources</h2>

      {/* TERMINOLOGY SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Terminology"}>test</Dropdown>

      <br />

      <Dropdown triggerWord={"Useful links"}>test</Dropdown>

      <div className="content-br"></div>

      <h2>The Basics</h2>

      <br />
      <br />

      {/* HELLO WORLD SECTION
      ====================================================================================================== */}
      <h3>Hello, World!</h3>
      <Clipboard code={HelloWorld}></Clipboard>
      <Code lang="cpp">{HelloWorld}</Code>
      <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>

      <div className="content-br"></div>

      {/* COMMENTS SECTION
      ====================================================================================================== */}
      <h3>Comments</h3>
      <Clipboard code={Comments}></Clipboard>
      <Code lang="cpp">{Comments}</Code>
      <Dropdown triggerWord={"Result"}></Dropdown>

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
};

export default CppPage;
