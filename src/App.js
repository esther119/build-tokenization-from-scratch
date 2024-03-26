import "./App.css";
import StringModifier from "./stringModifier";
import StringModifierPlay from "./stringModifierPlay";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Byte Pairing Algorithm</h1>
      <div>
        <div className="max-w-xl mx-auto">
          <p className="text-lg mb-4 text-justify">
            In large language models, we have a limited context length. So how
            can we fit as many words as possible? Let's say we have a string:{" "}
            <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
              aabdaaabac
            </code>
            . How can we make it shorter?
          </p>
          <p className="text-lg mb-4">
            For instance, what if{" "}
            <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
              Z=aa
            </code>
            ?
          </p>
        </div>
        <StringModifier />
        <div>
          <p className="text-lg mt-8 mb-4">
            See? Our string gets shorter! Can we make{" "}
            <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
              ZabdZabac
            </code>{" "}
            even shorter?
          </p>
        </div>
        <StringModifierPlay />
      </div>
    </div>
  );
}

export default App;

// import "./App.css";
// import StringModifier from "./stringModifier";
// import StringModifierPlay from "./stringModifierPlay";

// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-5xl font-bold">Byte Pairing Algorithm</h1>
//       <p>
//         In large language models, we have a limited context length. So how can
//         we fit as many words as possible? Let's say we have a string:{" "}
//         <code className="inline-block rounded-lg bg-gray-200">aabdaaabac</code>.
//         How can we make it shorter?
//       </p>
//       <p>
//         For instance, what if{" "}
//         <code className="inline-block rounded-lg bg-gray-200">Z=aa</code>?
//       </p>
//       <StringModifier />
//       <p>
//         See? Our string gets shorter! Can we make{" "}
//         <code className="inline-block rounded-lg bg-gray-200">ZabdZabac</code>{" "}
//         even shorter?
//       </p>
//       <StringModifierPlay />
//     </div>
//   );
// }

// export default App;
