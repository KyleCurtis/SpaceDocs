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
        <br />
        <br />
        <Accordion allowMultiple>
          {/* (SIDENAV) HOME SECTION
        ====================================================================================================== */}
         <NavDropdown buttonTitle={"00. Getting Started"}></NavDropdown>

          {/* (SIDENAV) JAVASCRIPT BASICS SECTION
        ====================================================================================================== */}
          <NavDropdown buttonTitle={"01. JavaScript Basics"} contentSection={
            <div>
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
            </div>
          }
          ></NavDropdown>

          {/* (SIDENAV) DATA TYPES SECTION
        ====================================================================================================== */}
        <NavDropdown buttonTitle={"02.Value Types"} contentSection={
            <div>
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
                    <SiJavascript className="side-nav-js-logo" /> Type
                    Conversions
                  </li>
                </Link>
              </ul>
            </div>
        }></NavDropdown>

          {/* (SIDENAV) OBJECTS SECTION
        ====================================================================================================== */}
          <AccordionItem p={0}>
            <h2>
              <AccordionButton>
                <Box
                  className="text-[var(--cat-mocha-text)]"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  03. Objects
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              <ul>
                <Link href="#objects">
                  <li>
                    <SiJavascript className="side-nav-js-logo" /> Objects
                  </li>
                </Link>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          {/* (SIDENAV) ARRAYS SECTION
        ====================================================================================================== */}
          <AccordionItem p={0}>
            <h2>
              <AccordionButton>
                <Box
                  className="text-[var(--cat-mocha-text)]"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  04. Arrays
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              <ul>
                <Link href="#arrays">
                  <li>
                    <SiJavascript className="side-nav-js-logo" /> Arrays
                  </li>
                </Link>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <div className="content-br"></div>
      </SideNav>

      <Navbar />
      <Header>
        <h2 className="main-topic text-[var(--cat-mocha-blue)]">JavaScript</h2>
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
      <br />

      <Dropdown buttonTitle={"Resources"} contentSection={"Test"}></Dropdown>

      <br />

      <div className="content-br"></div>

      <h2>JavaScript Basics</h2>
      <div id="hello-world" className="content-br"></div>

      {/* HELLO WORLD SECTION
      ====================================================================================================== */}
      <h3>Hello, World!</h3>
      <CodeBlock>
        <Clipboard code={HelloWorld}></Clipboard>
        <Code lang="javascript">{HelloWorld}</Code>
      </CodeBlock>
      <Dropdown buttonTitle={"Result"} contentSection={"Hello, World!"}></Dropdown>

      {/* COMMENTS SECTION
      ====================================================================================================== */}
      <div id="comments" className="content-br"></div>

      <h3>Comments</h3>
      <CodeBlock>
        <Clipboard code={HelloWorld}></Clipboard>
        <Code lang="javascript">{Comments}</Code>
      </CodeBlock>
      <Dropdown buttonTitle={"Result"} contentSection={""}></Dropdown>

      {/* VARIABLES SECTION
      ====================================================================================================== */}
      <div id="variables" className="content-br"></div>

      <h3>Variables</h3>
      <CodeBlock>
        <Clipboard code={Variables}></Clipboard>
        <Code lang="javascript">{Variables}</Code>
      </CodeBlock>
      <Dropdown
        buttonTitle={"Result"}
        contentSection={
          <div>
            Apollo 11 1969 <br />
            Neil Armstrong Edwin Aldrin Michael Collins
          </div>
        }
      ></Dropdown>

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
      <Dropdown buttonTitle={"Result"} contentSection={""}></Dropdown>

      {/* TYPEOF SECTION
      ====================================================================================================== */}
      <div id="type-checking" className="content-br"></div>

      <h3>Checking the Type</h3>
      <CodeBlock>
        <Clipboard code={TypeOf}></Clipboard>
        <Code lang="javascript">{TypeOf}</Code>
      </CodeBlock>
      <Dropdown
        buttonTitle={"Result"}
        contentSection={
          <div>
            string <br />
            number <br />
            boolean <br />
            undefined <br />
            object <br />
            number <br />
          </div>
        }
      ></Dropdown>

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
