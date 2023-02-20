/* NPM IMPORTS
============================================================================ */
import Link from "next/link";
import { useInView } from "react-intersection-observer";

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
} from "../../../code-examples/js-code";

const JsPage = () => {
  {
    /* TOP OF PAGE REF */
  }
  const { ref: topRef, inView: topInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* OUTPUT REF */
  }
  const { ref: outputRef, inView: outputInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* COMMENTS REF */
  }
  const { ref: commentsRef, inView: commentsInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* COMMENTS REF */
  }
  const { ref: variablesRef, inView: variablesInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  {
    /* TYPES REF */
  }
  const { ref: typesRef, inView: typesInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <MainLayout title={"SpaceDocs: JS Page"}>
      <SideNav>
        <div>
          <p className="text-[var(--mat-deep-cyan)] pl-2 text-lg border-b-2 border-b-[var(--mat-deep-border)]">
            SpaceDocs.info
          </p>
          <ul className="text-white">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="#top-section">
              <li className={`${topInView ? "active-link" : "inactive-link"}`}>
                Top of Page
              </li>
            </Link>
          </ul>
          <br />
          <p className="text-[var(--mat-deep-cyan)] pl-2 text-lg border-b-2 border-b-[var(--mat-deep-border)]">
            00. Introduction
          </p>
          <ul className="text-white">
            <Link href="#output-section">
              <li
                className={`${outputInView ? "active-link" : "inactive-link"}`}
              >
                Printing Output
              </li>
            </Link>

            <Link href="#comment-section">
              <li
                className={`${
                  commentsInView ? "active-link" : "inactive-link"
                }`}
              >
                Comments
              </li>
            </Link>

            <Link href="#variables-section">
              <li
                className={`${
                  variablesInView ? "active-link" : "inactive-link"
                }`}
              >
                Variables
              </li>
            </Link>

            <Link href="#types-section">
              <li
                className={`${typesInView ? "active-link" : "inactive-link"}`}
              >
                Value Types
              </li>
            </Link>
          </ul>
        </div>
      </SideNav>

      <Navbar />

      <br id="top-section" ref={topRef} />
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

      <div className="content-br"></div>
      <div className="h-0 border-[1px] border-gray-100 dark:border-[var(--mat-deep-border)]"></div>
      <div id="output-section" className="content-br"></div>

      {/* OUTPUT SECTION
      ====================================================================================================== */}
      <div ref={outputRef}>
        <div className="animate-this">
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
        </div>
      </div>

      <div className="content-br"></div>
      <div className="h-0 border-[1px] border-gray-100 dark:border-[var(--mat-deep-border)]"></div>
      <div id="comment-section" className="content-br"></div>

      {/* COMMENTS SECTION
      ====================================================================================================== */}
      <div ref={commentsRef}>
        <CodeBlock
          codeBlockHeader={
            <div>
              {"Single/Double Comments:"}
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
          <Code lang="javascript">{Comments}</Code>
        </CodeBlock>
        <Dropdown buttonTitle={"Result"} contentSection={""}></Dropdown>
      </div>

      <div className="content-br"></div>
      <div className="h-0 border-[1px] border-gray-100 dark:border-[var(--mat-deep-border)]"></div>
      <div id="variables-section" className="content-br"></div>

      {/* VARIABLES SECTION
      ====================================================================================================== */}
      <div ref={variablesRef}>
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
      </div>

      <div className="content-br"></div>
      <div className="h-0 border-[1px] border-gray-100 dark:border-[var(--mat-deep-border)]"></div>
      <div id="types-section" className="content-br"></div>

      {/* DATA TYPES SECTION
      ====================================================================================================== */}
      <div ref={typesRef}>
        <CodeBlock codeBlockHeader={"Primitive Data Types (Value Types)"}>
          <Clipboard code={Types}></Clipboard>
          <Code lang="javascript">{Types}</Code>
        </CodeBlock>
        <Dropdown buttonTitle={"Result"} contentSection={""}></Dropdown>
      </div>

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
