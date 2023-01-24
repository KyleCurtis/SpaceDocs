/* NPM IMPORTS
============================================================================ */
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast } from '@chakra-ui/react'

/* ICON IMPORTS
============================================================================ */
import { FaClipboard } from "react-icons/fa";

/* CLIPBOARD COMPONENT
============================================================================ */
const Clipboard = ({ code }) => {
    const toast = useToast()

  return (
    <CopyToClipboard text={code}>
      <button 
      onClick={() =>
        toast({
          title: 'Code Copied.',
          position: 'bottom-right',
          description: "The code has been copied to your clipboard!.",
          status: 'success',
          duration: 2500,
          isClosable: true,
        })
      } 
      className="absolute right-0 border-solid border-2 border-[var(--cat-mocha-surface1)] p-[8px]">
        <FaClipboard className="text-[var(--cat-mocha-text)]" />
      </button>
    </CopyToClipboard>
  );
};

export default Clipboard;
