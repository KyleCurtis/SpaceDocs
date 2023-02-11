/* NPM IMPORTS
============================================================================ */
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/cjs/styles/hljs";


/* CODE COMPONENT
============================================================================ */
const Code = ({ lang, children }) => {
  return (
    <div>
      <div className="code-block">
        <SyntaxHighlighter
          language={lang}
          style={tomorrowNightEighties}
          showLineNumbers={true}
          className="pr-[199px] !bg-transparent border-2 border-[var(--cat-mocha-text)] dark:border-[var(--cat-mocha-surface0)]"
        >
          {children}
        </SyntaxHighlighter>
      </div>
      <br />
    </div>
  );
};

export default Code;
