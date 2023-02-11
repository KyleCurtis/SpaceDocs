/* NPM IMPORTS
============================================================================ */
import Link from "next/link";

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
  Badge,
} from "@chakra-ui/react";

/* CODE IMPORTS
============================================================================ */
import {
  Output,
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
    <MainLayout title={"SpaceDocs: JS Page"}>
      <SideNav
        window={
          <div className="flex bg-white dark:bg-[var(--cat-mocha-crust)] m-auto shadow-sm shadow-black w-[120px] h-[120px] border-2 border-[var(--cat-mocha-text)] rounded-[100%] overflow-hidden">
            <SiJavascript className="!m-auto text-[var(--cat-mocha-core)] dark:text-[var(--cat-mocha-text)] bg-white dark:bg-[var(--cat-mocha-crust)] text-[62px] flex items-center" />
          </div>
        }
      >
        <br />
        <br />
        <Accordion allowMultiple>
          {/* (SIDENAV) HOME SECTION
        ====================================================================================================== */}
          <NavDropdown
            buttonTitle={"00. Getting Started"}
            contentSection={"Coming Soon..."}
          ></NavDropdown>

          {/* (SIDENAV) JAVASCRIPT BASICS SECTION
        ====================================================================================================== */}
          <NavDropdown
            buttonTitle={"01. JavaScript Basics"}
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

          {/* (SIDENAV) DATA TYPES SECTION
        ====================================================================================================== */}
          <NavDropdown
            buttonTitle={"02.Value Types"}
            contentSection={
              <div>
                <ul>
                  <Link href="#data-types">
                    <li>
                      <SiJavascript className="side-nav-js-logo" /> Value Types
                    </li>
                  </Link>
                  <Link href="#type-checking">
                    <li>
                      <SiJavascript className="side-nav-js-logo" /> Type
                      Checking (typeof)
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
            }
          ></NavDropdown>

          {/* (SIDENAV) OBJECTS SECTION
        ====================================================================================================== */}
          <NavDropdown
            buttonTitle={"03. Objects"}
            contentSection={
              <div>
                <ul>
                  <Link href="#objects">
                    <li>
                      <SiJavascript className="side-nav-js-logo" /> Objects
                    </li>
                  </Link>
                </ul>
              </div>
            }
          ></NavDropdown>

          {/* (SIDENAV) ARRAYS SECTION
        ====================================================================================================== */}
          <NavDropdown
            buttonTitle={"04. Arrays"}
            contentSection={
              <div>
                <ul>
                  <Link href="#arrays">
                    <li>
                      <SiJavascript className="side-nav-js-logo" /> Arrays
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
      <Header
        main_topic={"JavaScript"}
        topic_summary={
          "Explore the programming language that powers interactive websites, video games, and more!"
        }
      />

      <br />
      <br />

      <h2>Resources</h2>
      <br />

      <Dropdown
        buttonTitle={"Requirements"}
        contentSection={
          <div>
            <ul>
              <li>
                -{" "}
                <Link
                  className="text-blue-500"
                  target="_blank"
                  href="https://nodejs.org/"
                >
                  NodeJS
                </Link>
                : 19.3.0+ (NVM recommended)
              </li>
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

      <h2>JavaScript Basics</h2>
      <div id="hello-world" className="content-br"></div>

      {/* OUTPUT SECTION
      ====================================================================================================== */}
      <CodeBlock
        codeBlockHeader={
          <div>
            {"Printing Output:"}
            <Badge variant="outline" className="ml-2" colorScheme="green">
              Easy
            </Badge>
            <Badge variant="outline" className="ml-2" colorScheme="blue">
              Basics
            </Badge>
          </div>
        }
      >
        <Clipboard code={Output}></Clipboard>
        <Code lang="javascript">{Output}</Code>
      </CodeBlock>
      <Dropdown
        buttonTitle={"Result"}
        contentSection={"All systems go!"}
      ></Dropdown>

      {/* COMMENTS SECTION
      ====================================================================================================== */}
      <div id="comments" className="content-br"></div>

      <CodeBlock codeBlockHeader={<div>
            {"Single/Double Comments:"}
            <Badge variant="outline" className="ml-2" colorScheme="green">
              Easy
            </Badge>
            <Badge variant="outline" className="ml-2" colorScheme="blue">
              Basics
            </Badge>
          </div>}>
        <Clipboard code={Output}></Clipboard>
        <Code lang="javascript">{Comments}</Code>
      </CodeBlock>
      <Dropdown buttonTitle={"Result"} contentSection={""}></Dropdown>

      {/* VARIABLES SECTION
      ====================================================================================================== */}
      <div id="variables" className="content-br"></div>

      <CodeBlock codeBlockHeader={"Variables (let/const)"}>
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

      <CodeBlock codeBlockHeader={"Primitive Data Types (Value Types)"}>
        <Clipboard code={Types}></Clipboard>
        <Code lang="javascript">{Types}</Code>
      </CodeBlock>
      <Dropdown buttonTitle={"Result"} contentSection={""}></Dropdown>

      {/* TYPEOF SECTION
      ====================================================================================================== */}
      <div id="type-checking" className="content-br"></div>

      <CodeBlock codeBlockHeader={"Checking the Type"}>
        <Clipboard code={TypeOf}></Clipboard>
        <Code lang="javascript">{TypeOf}</Code>
      </CodeBlock>
      <Dropdown
        buttonTitle={"Result"}
        contentSection={
          <div>
            string <br />
            number <br />
            bigint <br />
            boolean <br />
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
      <CodeBlock codeBlockHeader={"Type Conversions"}>
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
    </MainLayout>
  );
};

export default JsPage;
