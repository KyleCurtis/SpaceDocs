import Image from "next/image";
import Rocket from "../../public/rocket-book.png";

import { IoIosArrowDropdownCircle } from "react-icons/io";

const Header = ({ main_topic, topic_summary, children, hero_image }: any) => {
  return (
    <div>
      <header className="text-center lg:text-left bg-transparent text-black dark:text-white">

        {hero_image}
        <h1 className="main-topic pb-4 font-bold text-black dark:text-white text-[40px]">
          {main_topic}
        </h1>
        <div className="topic-summary">{topic_summary}</div>
        {children}
        <br/>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/KyleCurtis/SpaceDocs">
          <button className="underline decoration-dotted">💻 Github</button>
        </a>
        <span className="px-3"/>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/KyleCurtis/SpaceDocs/issues">
          <button className="underline decoration-dotted">
            ⚠️ Report an issue
          </button>
        </a>
        <span className="px-3"/>
        <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/donate/?hosted_button_id=RHCR2JJ6ZZDPS">
          <button className="underline decoration-dotted">
            ☕ Buy me a coffee
          </button>
        </a>
        <br/>
      </header>
    </div>
  );
};

export default Header;
