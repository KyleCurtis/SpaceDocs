/* NPM IMPORTS
============================================================================ */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

/* CODE COMPONENT
============================================================================ */
const Code = ({ lang, children }: any) => {
  return (
    <div>
      <div className="!bg-[var(--mat-deep-contrast)] code-block border-4 rounded-lg border-[var(--mat-deep-border)]">
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
