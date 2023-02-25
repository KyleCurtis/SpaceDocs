import Clipboard from "./Clipboard";

const CodeBlock = ({ children, codeBlockHeader }: any) => {
  return (
    <div className="relative">
      <p className="text-left text-black dark:text-[darkgray] border-2 p-2 rounded-[5px_5px_0_0] border-[var(--dark-border)]">
        {codeBlockHeader}
        <Clipboard />
      </p>
      {children}
    </div>
  );
};

export default CodeBlock;
