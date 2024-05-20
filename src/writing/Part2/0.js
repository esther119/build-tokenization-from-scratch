import CodeRunner from "../../codeRunner";
import CodeRunnerCheck from "../../codeRunnerCheck";
import { UTF, getPair } from "../../data";
import "react-toastify/dist/ReactToastify.css";

const Part2Zero = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-gray-900 mt-8 overflow-hidden">
        Build Tokenizer From Scratch - Part 2
      </h1>
      <p>
        As we learned BPE in part 1, now, how can we apply BPE to our text in
        reality? We can follow these three steps:
      </p>
      <div className="flex justify-center items-center mt-4 mb-4 max-w-xl mx-auto">
        <ol className="list-decimal list-inside text-left text-base sm:text-lg">
          <li>Encode everything into raw bytes.</li>
          <li>Find the most common pair.</li>
          <li>
            Convert the common pair into a new representation, and use the new
            representation for common pairs.
          </li>
        </ol>
      </div>
      <p>To translate the steps into code:</p>
      <div className="flex justify-center items-center mt-4 mb-4 max-w-xl mx-auto">
        <ol className="list-decimal list-inside text-left text-base sm:text-lg">
          <li>
            We use{" "}
            <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
              pair_frequency
            </code>{" "}
            to create pairs so we can count the frequency of every consecutive
            pair, and find the pair that has the maximum frequency.
          </li>
          <li>
            We merge the high-frequency pairs into a new number to represent it.
          </li>
        </ol>
      </div>
      <p>
        Now, let's encode our text into a list of tokens ranging from 0 to 255
        using utf-8 encoding.
      </p>
      <CodeRunner initialCode={UTF}></CodeRunner>
      <p>
        We use{" "}
        <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
          pair_frequency
        </code>{" "}
        to create pairs that we can count the frequency of every consecutive
        pair.
      </p>
      <div className="flex justify-center items-center w-full sm:w-2/3 mx-auto">
        <CodeRunnerCheck initialCode={getPair}></CodeRunnerCheck>
      </div>
      <p>
        Next, we create a{" "}
        <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
          create_consecutive_pair_tokens
        </code>{" "}
        function that can give us a new representation of the value. For
        instance, let's say our example is merge (6,7) into a new number 99.
      </p>
    </div>
  );
};

export default Part2Zero;
