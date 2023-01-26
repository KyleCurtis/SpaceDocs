import Head from "next/head";

import TopButton from "../TopButton";
//md:mx-[15%] lg:mx-[22%]
import SideNav from "../SideNav/SideNav";

const MainLayout = ({ children, title }) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
      <div className="main px-[4%] lg:ml-[270px] md:px-[15%] lg:px-[15%] bg-white dark:bg-[var(--cat-mocha-crust)]">
        <div className="content bg-white dark:bg-[var(--cat-mocha-crust)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
