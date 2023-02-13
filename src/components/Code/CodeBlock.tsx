const CodeBlock = ({ children, codeBlockHeader }: any) => {
  return (
    <div className="relative">
      <h3 className="text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-subtext0)]">
        {codeBlockHeader}
      </h3>
      {children}
    </div>
  );
};

export default CodeBlock;
