/* NPM IMPORTS
============================================================================ */
import { CopyToClipboard } from "react-copy-to-clipboard";

/* ICON IMPORTS
============================================================================ */
import { FaClipboard } from "react-icons/fa";

/* CLIPBOARD COMPONENT
============================================================================ */
const Clipboard = ({ code }) => {
  return (
    <CopyToClipboard text={code}>
      <button className="absolute right-0 border-solid border-2 border-[var(--cat-mocha-surface1)] p-[10px]">
        <FaClipboard className="text-[var(--cat-mocha-text)]" />
      </button>
    </CopyToClipboard>
  );
};

export default Clipboard;
