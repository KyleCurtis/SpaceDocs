import Collapsible from "react-collapsible";

const NavDropdown = ({ triggerWord, children }) => {
  return (
    <div>
      <div className="nav-dropdown bg-[var(--cat-mocha-base)] text-[var(--cat-mocha-text)] font-bold">
        <Collapsible
          className=""
          trigger={triggerWord}
          transitionTime={100}
        >
          <div>{children}</div>
        </Collapsible>
      </div>
    </div>
  );
};

export default NavDropdown;
