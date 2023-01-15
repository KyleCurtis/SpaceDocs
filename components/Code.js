import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Code = ({ lang, children }) => {
  return (
    <div>
      <div className="code-block pr-[50px]">
        <SyntaxHighlighter
          language={lang}
          style={atomOneDark}
          showLineNumbers={true}
        >
          {children}
        </SyntaxHighlighter>
      </div>
      <br />
    </div>
  );
};

export default Code;
