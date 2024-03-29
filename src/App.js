import "./App.css";
import BytePairingAlgorithm from "./bytePairing";
import { PythonProvider } from "react-py";
import Codeblock from "./codeBlock";
import SyntaxHighlightComponent from "./syntaxHighlight";

const code = `
org_tokens = text.encode("utf-8") # raw bytes
org_tokens = list(map(int, org_tokens)) 


def get_stats(ids):
    counts = {}
    for pair in zip(ids, ids[1:]):
        counts[pair] = counts.get(pair, 0) + 1
    return counts

pairs = get_stats(org_tokens)
max_pair = max(pairs, key=pairs.get)
print(pairs)
pairs[max_pair]
`;
function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <BytePairingAlgorithm></BytePairingAlgorithm>
      <PythonProvider>
        <Codeblock />
      </PythonProvider>
    </div>
  );
}

export default App;
