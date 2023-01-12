import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";

import Typewriter from "typewriter-effect";

import { HelloWorld, Comments } from "../../../code/cpp-code";
import CppBlock from "../../../components/CppBlock";

import Clipboard from "../../../components/Clipboard";


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
      <CppBlock lang="{cpp}">{HelloWorld}</CppBlock>
      <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>

      <div className="content-br"></div>

      {/* COMMENTS SECTION
      ====================================================================================================== */}
      <h3>Comments</h3>
      <Clipboard code={Comments}></Clipboard>
      <CppBlock lang="{cpp}">{Comments}</CppBlock>
      <Dropdown triggerWord={"Result"}>Hello, World!</Dropdown>

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
