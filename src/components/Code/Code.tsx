/* NPM IMPORTS
============================================================================ */
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";


/* CODE COMPONENT
============================================================================ */
const Code = ({ lang:any, children }) => {
  return (
    <div>
      <div className="code-block">
        <SyntaxHighlighter
          language={lang}
          style={vscDarkPlus}
          showLineNumbers={true}
          className="pr-[199px] border-2 border-[var(--cat-mocha-text)] dark:border-[var(--cat-mocha-surface0)]"
        >
          {children}
        </SyntaxHighlighter>
      </div>
      <br />
    </div>
  );
};

export default Code;