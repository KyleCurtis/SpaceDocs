/* NPM IMPORTS
============================================================================ */
import Link from "next/link";
import Typewriter from "typewriter-effect";

/* COMPONENT IMPORTS
============================================================================ */
import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";
import Navbar from "../../../components/Navbar";
import NavDropdown from "../../../components/SideNav/NavDropdown";
import SideNav from "../../../components/SideNav/SideNav";
import MathBox from "../../../components/MathBox";

/* ICON IMPORTS
============================================================================ */
import { TbMathSymbols } from "react-icons/tb";

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

const MathPage = () => {
  return (
    <>
      <SideNav>
        <br />
        <br />
        <Accordion allowMultiple>
          {/* (SIDENAV) HOME SECTION
        ====================================================================================================== */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box className='text-[var(--cat-mocha-text)]' as="span" flex="1" textAlign="left">
                  00. Getting Started
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              <ul className="side-nav-ul">
                <li>🏠 Home</li>
                <li>🤝 About</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          {/* (SIDENAV) JAVASCRIPT BASICS SECTION
        ====================================================================================================== */}
          <AccordionItem p={0}>
            <h2>
              <AccordionButton>
                <Box className='text-[var(--cat-mocha-text)]' as="span" flex="1" textAlign="left">
                  01. Algebra 1 and 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              <ul>
                <Link href="#hello-world">
                  <li>
                    <TbMathSymbols className="side-nav-js-logo" /> Hello, World!
                  </li>
                </Link>
                <Link href="#comments">
                  <li>
                    <TbMathSymbols className="side-nav-js-logo" /> Comments
                  </li>
                </Link>
                <Link href="#variables">
                  <li>
                    <TbMathSymbols className="side-nav-js-logo" /> Variables
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
        <h2 className="main-topic text-[var(--cat-mocha-blue)]">Mathematics</h2>
        <div className="header-section">
          <div className="header-info text-[var(--cat-mocha-text)] font-bold">
            The universal language that powers:
            <Typewriter
              options={{
                strings: [
                  "Computers",
                  "Machine Learning",
                  "Artificial Intelligence",
                  "Finance",
                  "Statistics",
                ],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </div>
        </div>
      </Header>
      <div className="content-br"></div>
      <h2 className="main-topic">Resources</h2>
      <br />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className='text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)]' as="span" flex="1" textAlign="left">
                Resources
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={0}>Test</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      <div className="content-br"></div>
      <h2 className="main-topic">Equalities</h2>
      <p className="text-white">Mathematical Equation</p>
      
      <MathBox>{"`2x+10-5=100`"}</MathBox>
      
      <br />

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className='text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)]' as="span" flex="1" textAlign="left">
                Notes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={0}>Test</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div className="content-br"></div>
      <p className="text-white">Monomial Expression</p>
      <MathBox>{"`2x`"}</MathBox>
      <div className="content-br"></div>
      <p className="text-white">Binomial Expression (Polynomial)</p>
      <MathBox>{"`2x+10`"}</MathBox>
      <br />
      <p className="text-white">Trinomial Expression (Polynomial)</p>
      <MathBox>{"`2x+10-5`"}</MathBox>
      <div className="content-br"></div>
      <h2 className="main-topic">Inequalities</h2>
      <MathBox>{"`>`"} = Greater than</MathBox> <br />
      <MathBox>{"`>=`"} = Greater than or equal to</MathBox> <br />
      <MathBox>{"`<`"} = Less than</MathBox> <br />
      <MathBox>{"`<=`"} = Less than or equal to</MathBox> <br />
      <div className="content-br"></div>
      <h2 className="main-topic">Like terms</h2>
      <MathBox>{"`2x + 5x`"}</MathBox> <br />
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <div className="content-br"></div>
      <MathBox>{"``"}</MathBox>
    </>
  );
};

export default MathPage;
