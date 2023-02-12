import Image from "next/image";
import Rocket from "../../public/rocket-book.png";

import {IoIosArrowDropdownCircle} from "react-icons/io"

const Header = ({ children, main_topic, topic_summary }) => {
  return (
    <div className="h-screen pt-[50px]">
      <header className="text-[var(--cat-mocha-text)]">
        <br />
        <br />
        <br />
        <br />
        <Image
          src={Rocket}
          alt="Rocket Launch Logo"
          className="rocket w-[300px] h-[280px] m-auto"
        />
        <h1 className="main-topic pb-4 font-bold text-[var(--cat-mocha-sky)]">{main_topic}</h1>
        <div className="topic-summary">{topic_summary}</div>
      </header>
      <IoIosArrowDropdownCircle className="" />
    </div>
  );
};

export default Header;
