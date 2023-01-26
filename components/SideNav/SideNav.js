import { IoMdRocket } from "react-icons/io";

const SideNav = ({ children, window }) => {
  return (
    <div className="side-nav hidden bg-[var(--cat-mocha-mantle)] w-[270px] lg:flex fixed top-0 left-0 border-r-2 border-black dark:border-[var(--cat-mocha-surface0)]">
      <nav className="w-[270px]">
        {window}
        {children}
      </nav>
    </div>
  );
};

export default SideNav;
