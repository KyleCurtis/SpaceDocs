import Head from "next/head";
//md:mx-[15%] lg:mx-[22%]
import SideNav from "../SideNav/SideNav";

const MainLayout = ({ children, title }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="main px-[4%] lg:ml-[270px] bg-[#FAFAFA] dark:bg-[var(--mat-deep-bg)]">
        <div className="content bg-[#FAFAFA] dark:bg-[var(--mat-deep-bg)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
