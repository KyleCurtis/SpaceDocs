const SideNav = ({ children }) => {
  return (
    <div className="side-nav hidden bg-[var(--cat-mocha-crust)] w-[270px] lg:flex fixed top-20 left-0 border-r-2 border-black dark:border-[var(--cat-mocha-surface0)]">
      <nav className="w-[270px]">{children}</nav>
    </div>
  );
};

export default SideNav;
