import Head from "next/head";
import { Inter } from "@next/font/google";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Typewriter from "typewriter-effect";

import Header from "../components/Header";
import Dropdown from "../components/Dropdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const codeString = `#include <iostream>
    
int main(void) {
    std::cout << "Hello, World!" << std::endl;

    return 0;
}`;

  return (
    <>
      <Head>
        <title>Rocket Docs</title>
      </Head>

      <Header>
        <h1>Home</h1>
        <div className="header-info">
          Explore a new world by learning a new skill such as:
          <Typewriter
            options={{
              strings: [
                "Algebra",
                "C++",
                "JavaScript",
                "Rust",
                "Python",
                "PyTorch",
              ],
              autoStart: true,
              loop: true,
            }}
          ></Typewriter>
        </div>
      </Header>

      <div className="content-br"></div>

      <h1>Home</h1>

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
}
