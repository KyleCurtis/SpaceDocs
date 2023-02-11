import Head from "next/head";
//md:mx-[15%] lg:mx-[22%]
import SideNav from "../SideNav/SideNav";

const MainLayout = ({ children, title }) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
      <div className="main px-[4%] lg:ml-[270px] md:px-[18%] bg-white dark:bg-[var(--cat-mocha-crust)]">
        <div className="content bg-white dark:bg-[var(--cat-mocha-crust)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
