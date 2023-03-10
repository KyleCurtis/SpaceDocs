/* NPM IMPORTS
============================================================================ */
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast } from '@chakra-ui/react'

/* ICON IMPORTS
============================================================================ */
import { FaClipboard } from "react-icons/fa";

/* CLIPBOARD COMPONENT
============================================================================ */
const Clipboard = ({ code }: any) => {
    const toast = useToast()

  return (
    <CopyToClipboard text={code}>
      <button 
      onClick={() =>
        toast({
          title: 'Code Copied.',
          position: 'bottom-right',
          description: "The code has been copied to your clipboard!",
          status: 'success',
          duration: 2500,
          isClosable: true,
        })
      } 
      className="float-right pt-1">
        <FaClipboard className="text-[var(--cat-mocha-blue)]" />
      </button>
    </CopyToClipboard>
  );
};

export default Clipboard;
