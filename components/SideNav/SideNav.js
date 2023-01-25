import { IoMdRocket } from "react-icons/io";

const SideNav = ({ children }) => {
  return (
    <div className="side-nav hidden bg-[var(--cat-mocha-mantle)] w-[270px] lg:flex fixed top-0 left-0 border-r-2 border-black dark:border-[var(--cat-mocha-surface0)]">
      <nav className="w-[270px]">
        <IoMdRocket className="text-[var(--cat-mocha-lavender)] shadow-sm shadow-black bg-[var(--cat-mocha-crust)] text-[106px] p-4 border-2 border-[var(--cat-mocha-text)] m-auto rounded-full" />
        {children}
      </nav>
    </div>
  );
};

export default SideNav;
