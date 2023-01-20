import Collapsible from "react-collapsible";

const Dropdown = ({ triggerWord, children }) => {
  return (
    <div className="border-2 border-black dark:border-[var(--cat-mocha-surface1)] text-black dark:text-white font-bold">
      <Collapsible
        trigger={triggerWord}
        transitionTime={100}
        className="bg-white dark:bg-[var(--cat-mocha-crust)]"
      >
        <div className="dropdown-content">{children}</div>
      </Collapsible>
    </div>
  );
};

export default Dropdown;
