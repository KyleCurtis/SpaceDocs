import Head from "next/head";
import { Inter } from "@next/font/google";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

import Header from "../components/Header";
import SideNav from "../components/SideNav/SideNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SideNav></SideNav>

      <Navbar />
      <Head>
        <title>Rocket Docs</title>
      </Head>

      <Header>
        <h1 className="main-topic">Home</h1>
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
