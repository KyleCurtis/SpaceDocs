/* NPM IMPORTS
============================================================================ */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

/* CODE COMPONENT
============================================================================ */
const Code = ({ lang, children }: any) => {
  return (
    <div>
      <div className="!bg-black code-block m-auto border-2 rounded-[0_0_5px_5px] border-[var(--dark-border)]">
        <SyntaxHighlighter
          language={lang}
          style={vscDarkPlus}
          showLineNumbers={true}
          className="!bg-transparent"
        >
          {children}
        </SyntaxHighlighter>
      </div>
      <br />
    </div>
  );
};

export default Code;
