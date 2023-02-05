import Image from "next/image";
import Rocket from "../public/rocket-book.png";

const Header = ({ children, main_topic, topic_summary }) => {
  return (
    <div>
      <header className="text-[var(--cat-mocha-text)] sm:bg-[var(--cat-mocha-base)] ">
        <br />
        <br />
        <br />
        <br />
        <Image
          src={Rocket}
          alt="Rocket Launch Logo"
          className="rocket w-[200px] h-[180px] m-auto"
        />
        <h1 className="main-topic pb-4 font-bold text-[var(--cat-mocha-sky)]">{main_topic}</h1>
        <div className="topic-summary">{topic_summary}</div>
      </header>
    </div>
  );
};

export default Header;
