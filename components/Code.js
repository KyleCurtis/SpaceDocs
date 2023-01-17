import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Code = ({ lang, children }) => {
  return (
    <div>
      <div className="code-block">
        <SyntaxHighlighter
          language={lang}
          style={atomOneDark}
          showLineNumbers={true}
          className="pr-[199px]"
        >
          {children}
        </SyntaxHighlighter>
      </div>
      <br />
    </div>
  );
};

export default Code;
