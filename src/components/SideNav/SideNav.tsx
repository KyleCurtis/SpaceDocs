import { IoMdRocket } from "react-icons/io";

const SideNav = ({ children, window }: any) => {
  return (
    <div className="side-nav hidden bg-[var(--mat-deep-contrast)] w-[270px] lg:flex fixed top-0 left-0 border-r-2 border-black dark:border-[var(--mat-deep-border)]">
      <nav className="w-[270px]">
        {window}
        {children}
      </nav>
    </div>
  );
};

export default SideNav;
