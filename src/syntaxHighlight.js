import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const SyntaxHighlightComponent = ({ codeString }) => {
  return (
    <SyntaxHighlighter language="python" style={coy}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlightComponent;
