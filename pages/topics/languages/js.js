/* NPM IMPORTS
============================================================================ */
import Link from "next/link";
import Typewriter from "typewriter-effect";

/* COMPONENT IMPORTS
============================================================================ */
import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";
import Code from "../../../components/Code";
import Clipboard from "../../../components/Clipboard";

import CodeBlock from "../../../components/CodeBlock";

import Navbar from "../../../components/Navbar";

import SideNav from "../../../components/SideNav";

import { SiJavascript } from "react-icons/si";
import { BsGearFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";

/* CODE IMPORTS
============================================================================ */
import {
  HelloWorld,
  Comments,
  Variables,
  Types,
  TypeOf,
  TypeConversions,
  Objects,
  Arrays,
  Functions,
  Arithmetic_Operators,
  Plus_Minus_Operators,
  Assignment_Operators,
  Comparison_Operators,
  Mathematics,
} from "../../../code/js-code";

const JsPage = () => {
  return (
    <>
      <SideNav>
        <ul className="side-nav-ul">
          <li className="side-nav-header">
            <BsGearFill className="mb-[3px] inline-block text-[14px]" />{" "}
            Important
          </li>
          <li>🏠 Home</li>
          <li>🤝 About</li>
          <br />
          <li className="side-nav-header">
            <AiFillCode className="mb-[3px] inline-block text-[14px]" /> The
            Basics
          </li>
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
          <br />

          <li className="side-nav-header">
            <AiFillCode className="mb-[3px] inline-block text-[14px]" /> Data
            Types
          </li>
          <Link href="#">
            <li>
              <SiJavascript className="side-nav-js-logo" /> Value Types
            </li>
          </Link>
          <Link href="#">
            <li>
              <SiJavascript className="side-nav-js-logo" /> Type Checking
              (typeof)
            </li>
          </Link>
          <Link href="#">
            <li>
              <SiJavascript className="side-nav-js-logo" /> Type Conversions
            </li>
          </Link>
          <br />

          <li className="side-nav-header">
            <AiFillCode className="mb-[3px] inline-block text-[14px]" />{" "}
            Reference Types
          </li>
          <Link href="#">
            <li>
              <SiJavascript className="side-nav-js-logo" /> Objects
            </li>
          </Link>
          <Link href="#">
            <li>
              <SiJavascript className="side-nav-js-logo" /> Arrays
            </li>
          </Link>
          <br />

          <li className="side-nav-header">
            <AiFillCode className="mb-[3px] inline-block text-[14px]" /> Other
          </li>

          <Link href="#">
            <li>test</li>
          </Link>
          <Link href="#">
            <li>test</li>
          </Link>
          <Link href="#">
            <li>test</li>
          </Link>
          <Link href="#">
            <li>test</li>
          </Link>
          <br />

          <li className="side-nav-header">
            <AiFillCode className="mb-[3px] inline-block text-[14px]" /> Other
          </li>

          <Link href="#">
            <li>test</li>
          </Link>
          <Link href="#">
            <li>test</li>
          </Link>
          <Link href="#">
            <li>test</li>
          </Link>
          <Link href="#">
            <li>test</li>
          </Link>
          <br />
        </ul>
      </SideNav>

      <Navbar />
      <Header>
        <h1 className="text-[var(--cat-mocha-blue)]">JavaScript</h1>
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

      <h2>Resources</h2>

      {/* TERMINOLOGY SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Terminology"}>test</Dropdown>

      <br />

      <Dropdown triggerWord={"Table of Contents"}>
        <Link href="#hello-world">Hello, World!</Link> <br />
        <Link href="#comments">Comments</Link> <br />
        <Link href="#variables">Variables</Link> <br />
        <Link href="#data-types">Data Types</Link> <br />
        <Link href="#type-checking">Type checking</Link> <br />
        <Link href="#type-conversions">Type Conversions</Link> <br />
        <Link href="#objects">Objects</Link> <br />
      </Dropdown>

      <div id="hello-world" className="content-br"></div>

      <h2>The Basics</h2>
      <br />

      {/* HELLO WORLD SECTION
      ====================================================================================================== */}
      <h3>Hello, World!</h3>
      <CodeBlock>
        <Clipboard code={HelloWorld}></Clipboard>
        <Code lang="javascript">{HelloWorld}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>

      {/* COMMENTS SECTION
      ====================================================================================================== */}
      <div id="comments" className="content-br"></div>

      <h3>Comments</h3>
      <CodeBlock>
        <Clipboard code={HelloWorld}></Clipboard>
        <Code lang="javascript">{Comments}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}></Dropdown>

      {/* VARIABLES SECTION
      ====================================================================================================== */}
      <div id="variables" className="content-br"></div>

      <h3>Variables</h3>
      <CodeBlock>
        <Clipboard code={Variables}></Clipboard>
        <Code lang="javascript">{Variables}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}>
        Apollo 11 1969 <br />
        Neil Armstrong Edwin Aldrin Michael Collins
      </Dropdown>

      {/* DATA TYPES SECTION
      ====================================================================================================== */}
      <div id="data-types" className="content-br"></div>

      <h2>Value Types</h2>
      <br />

      <h3>Primitive Data Types (Value Types)</h3>
      <CodeBlock>
        <Clipboard code={Types}></Clipboard>
        <Code lang="javascript">{Types}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}></Dropdown>

      {/* TYPEOF SECTION
      ====================================================================================================== */}
      <div id="type-checking" className="content-br"></div>

      <h3>Checking the Type</h3>
      <CodeBlock>
        <Clipboard code={TypeOf}></Clipboard>
        <Code lang="javascript">{TypeOf}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}>
        string <br />
        number <br />
        boolean <br />
        undefined <br />
        object
      </Dropdown>

      {/* TYPE CONVERSION SECTION
      ====================================================================================================== */}
      <div id="type-conversions" className="content-br"></div>
      <h3>Type Conversions</h3>
      <CodeBlock>
        <Clipboard code={TypeConversions}></Clipboard>
        <Code lang="javascript">{TypeConversions}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}>
        <p>string</p> <br />
        <p>number</p> <br />
        <p>string</p>
      </Dropdown>

      {/* OBJECTS SECTION
      ====================================================================================================== */}
      <div id="objects" className="content-br"></div>

      <h2>Reference Types</h2>
      <br />

      <h3>Objects</h3>
      <CodeBlock>
        <Clipboard code={Objects}></Clipboard>
        <Code lang="javascript">{Objects}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}>
        Player <br />
        2 <br />
        true <br />
        3 <br />
        Player01
      </Dropdown>

      {/* ARRAYS SECTION
      ====================================================================================================== */}
      <div id="arrays" className="content-br"></div>
      <h3>Arrays</h3>
      <CodeBlock>
        <Clipboard code={Arrays}></Clipboard>
        <Code lang="javascript">{Arrays}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}></Dropdown>

      {/* FUNCTIONS SECTION
      ====================================================================================================== */}
      <div id="functions" className="content-br"></div>
      <h3>Functions</h3>
      <CodeBlock>
        <Clipboard code={Functions}></Clipboard>
        <Code lang="javascript">{Functions}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}></Dropdown>

      {/* ARITHMETIC OPERATORS SECTION
      ====================================================================================================== */}
      <div id="arithmetic-operators" className="content-br"></div>

      <h2>Operators</h2>
      <br />

      <h3>Arithmetic Operators</h3>
      <CodeBlock>
        <Clipboard code={Arithmetic_Operators}></Clipboard>
        <Code lang="javascript">{Arithmetic_Operators}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}></Dropdown>

      {/* PLUS & MINUS OPERATORS SECTION
      ====================================================================================================== */}
      <div id="plus-minus-operators" className="content-br"></div>
      <h3>Plus and Minus Operators</h3>
      <CodeBlock>
        <Clipboard code={Plus_Minus_Operators}></Clipboard>
        <Code lang="javascript">{Plus_Minus_Operators}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}></Dropdown>

      {/* ASSIGNMENT OPERATORS SECTION
      ====================================================================================================== */}
      <div id="assignment-operators" className="content-br"></div>
      <h3>Assignment Operators</h3>
      <CodeBlock>
        <Clipboard code={Assignment_Operators}></Clipboard>
        <Code lang="javascript">{Assignment_Operators}</Code>
      </CodeBlock>
      <Dropdown triggerWord={"Result"}></Dropdown>

      {/* COMPARISON OPERATORS SECTION
      ====================================================================================================== */}
      <div id="comparison-operators" className="content-br"></div>
      <h3>Comparison Operators</h3>
      <CodeBlock>
        <Clipboard code={Comparison_Operators}></Clipboard>
        <Code lang="javascript">{Comparison_Operators}</Code>
      </CodeBlock>
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

export default JsPage;
