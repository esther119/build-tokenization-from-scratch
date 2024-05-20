import CodeRunner from "../../codeRunner";
const Test = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-gray-900 mt-8 overflow-hidden">
        What is tokenization?
      </h1>
      <div className="w-full sm:w-2/3 mx-auto">
        <CodeRunner></CodeRunner>
      </div>
      <p>
        Esther began learning how to build the GPT tokenizer with Andrej
        Karpathy. As she was learning, she realized, "OMG! The content is
        AMAZING! But why is it so... inhuman?" (Youtube content greater than
        30min = inhuman). The video is a scary 2 hours. Most of the time, people
        don’t even dare to start. Can we make the learning less scary and more
        fun?
      </p>
      <div className="flex justify-center items-center mt-4 mb-4">
        <img src="/1.png" alt="tokenizer1" class="absolute-width-96 h-auto" />
      </div>{" "}
    </div>
  );
};

export default Test;

// const Test = () => {
//   return (
//     <div>
//       <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 mt-8">
//         What is test test test
//       </h1>
//       <div className="max-w-xl mx-auto">
//         <p className="text-lg mb-4 text-justify">
//           Tokenization is the process of converting raw text into a sequence of
//           tokens. Simply put, it involves converting characters and words into
//           integers which can then be used to train our Language Model. <br />
//           For instance, if you visit the popular tokenization method,{" "}
//           <div className="flex justify-center items-center mt-4 mb-4">
//             <img
//               src="/1.png"
//               alt="tokenizer1"
//               style={{ maxWidth: "none", width: "900px" }}
//             />
//           </div>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Test;
