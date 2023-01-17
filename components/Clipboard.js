import { CopyToClipboard } from "react-copy-to-clipboard";

import { FaClipboard } from "react-icons/fa";

const Clipboard = ({ code }) => {
  return (
    <CopyToClipboard text={code}>
      <button className="hidden lg:block border-solid border-2 border-[var(--cat-mocha-surface1)] float-right p-[10px] right-0">
        <FaClipboard className="text-[var(--cat-mocha-text)]"/>
      </button>
    </CopyToClipboard>
  );
};

export default Clipboard;
