import { Inter } from "@next/font/google";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";

import Typewriter from "typewriter-effect";

import {HelloWorld, Comments} from "../../../code/cpp-code";

const inter = Inter({ subsets: ["latin"] });

const CppPage = () => {

  return (
    <>
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

      <div className="content-br"></div>

      <h2>The Basics</h2>

      <br />
      <br />

      {/* HELLO WORLD SECTION
      ====================================================================================================== */}
      <Dropdown triggerWord={"Hello, World!"}>
        <div className="code-block">
          <SyntaxHighlighter language="cpp" style={dracula}>
            {HelloWorld}
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
          <SyntaxHighlighter language="cpp" style={dracula}>
            {Comments}
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

export default CppPage;
