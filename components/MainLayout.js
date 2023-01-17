import Header from "./Header";
import TopButton from "./TopButton";
//md:mx-[15%] lg:mx-[22%]
import SideNav from "./SideNav";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      
      <TopButton></TopButton>
      <div className="main lg:ml-[270px] px-[14%] bg-white dark:bg-[var(--cat-mocha-crust)]">
        <div className="content bg-white dark:bg-[var(--cat-mocha-crust)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
