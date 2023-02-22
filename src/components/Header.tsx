import Image from "next/image";
import Rocket from "../../public/rocket-book.png";

import { IoIosArrowDropdownCircle } from "react-icons/io";

const Header = ({ main_topic, topic_summary, children }: any) => {
  return (
    <div>
      <header className="text-center lg:text-left bg-transparent text-black dark:text-white">

        <Image
          src={Rocket}
          alt="Rocket Launch Logo"
          className="sm-m-auto sm:block lg:float-right w-[300px] h-[280px] m-auto"
        />
        <h1 className="main-topic pb-4 font-bold text-black dark:text-white text-[40px]">
          {main_topic}
        </h1>
        <div className="topic-summary">{topic_summary}</div>
        {children}
      </header>
    </div>
  );
};

export default Header;
