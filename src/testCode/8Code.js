import CodeRunnerCheck from "../codeRunnerCheck";
import { getPair } from "../data";

const CodeChecker = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-gray-900 mt-8 overflow-hidden">
        Code submission test
      </h1>
      {/* <div className="flex justify-center items-center mt-4 mb-4"></div> */}
      <div className="flex justify-center items-center w-full sm:w-2/3 mx-auto">
        <CodeRunnerCheck initialCode={getPair}></CodeRunnerCheck>
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

export default CodeChecker;
