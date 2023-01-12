import { CopyToClipboard } from "react-copy-to-clipboard";

import { FaClipboard } from "react-icons/fa";

const Clipboard = ({ code }) => {
  return (
    <CopyToClipboard text={code}>
      <button className="border-solid border-2 border-[var(--cat-mocha-surface1)] p-[10px] absolute right-0">
        <FaClipboard className="text-[var(--cat-mocha-text)]"/>
      </button>
    </CopyToClipboard>
  );
};

export default Clipboard;
