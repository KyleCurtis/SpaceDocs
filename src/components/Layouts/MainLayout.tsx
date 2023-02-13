import Head from "next/head";
//md:mx-[15%] lg:mx-[22%]
import SideNav from "../SideNav/SideNav";

const MainLayout = ({ children, title }: any) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
      <div className="main px-[4%] lg:ml-[270px] md:px-[18%] bg-[#FAFAFA] dark:bg-[var(--mat-dark-bg)]">
        <div className="content bg-[#FAFAFA] dark:bg-[var(--mat-dark-bg)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
