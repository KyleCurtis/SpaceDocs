import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children, navChildren }: any) => {
  return (
    <div className="bg-white dark:bg-[var(--dark-bg)]">
    <Navbar />
     <div className="container pt-[140px]">
  <nav className="sidenav h-screen md:pl-[29px] hidden md:block bg-white dark:bg-[var(--dark-bg)] text-black dark:text-white">
    {navChildren}
    <div className="content-br"></div>
    <div className="content-br"></div>
    <div className="content-br"></div>


  </nav>
  <div className="w-[100%] main-content px-8 m-auto md:ml-[250px] bg-white dark:bg-[var(--dark-bg)]">
    {children}
  </div>
</div>
    </div>
  );
};

export default Layout;
