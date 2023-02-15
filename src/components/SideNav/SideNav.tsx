import { IoMdRocket } from "react-icons/io";

const SideNav = ({ children, window }: any) => {
  return (
    <div className="side-nav hidden bg-[var(--mat-dark-contrast)] w-[270px] lg:flex fixed top-0 left-0 border-r-[1px] border-black dark:border-[var(--mat-dark-orange)]">
      <nav className="w-[270px]">
        {window}
        {children}
      </nav>
    </div>
  );
};

export default SideNav;
