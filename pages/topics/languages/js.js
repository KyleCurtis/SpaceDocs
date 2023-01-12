import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";

import Typewriter from "typewriter-effect";

//import {HelloWorld, Comments} from "../../../code/cpp-code";


const JsPage = () => {

  return (
    <>
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

      <div className="content-br"></div>

      <h2>The Basics</h2>
      <br />

      {/* HELLO WORLD SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Hello, World!"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

      <br />
      <br />

      {/* COMMENTS SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Comments"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

      <br />
      <br />

      {/* VARIABLES SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Variables"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

      <br />
      <br />

      {/* DATA TYPES SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Data Types"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

      <br />
      <br />

      {/* TYPE CONVERSION SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Type Conversion"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

      <br />
      <br />

      {/* MATHEMATICS SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Mathematics"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

      <br />
      <br />

      {/* OPERATORS SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Operators"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

      <div className="content-br"></div>

      <h2>Data Structures</h2>
      <br />

      {/* OBJECTS SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Objects"}>
        <div className="code-block">
          <SyntaxHighlighter language="js" style={dracula}>
            {/*hello*/}
          </SyntaxHighlighter>
        </div>
        <br />
        <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>
      </Dropdown>

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
