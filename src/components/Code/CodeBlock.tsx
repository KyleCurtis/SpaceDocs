import Clipboard from "./Clipboard";

const CodeBlock = ({ children, codeBlockHeader }: any) => {
  return (
    <div className="relative">
      <h3 className="text-left text-black dark:text-white border-2 p-2 rounded-[5px_5px_0_0] border-[var(--dark-border)]">
        {codeBlockHeader}
        <Clipboard />
      </h3>
      {children}
    </div>
  );
};

export default CodeBlock;
