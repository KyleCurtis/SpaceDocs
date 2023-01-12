import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CppBlock = ({lang, children}) => {
    return (
        <div>
        <div className="code-block">
          <SyntaxHighlighter language={lang} style={dracula} showLineNumbers={true}>
            {children}
          </SyntaxHighlighter>
        </div>
        <br />
        </div>
    )
}

export default CppBlock;