import React from "react";
import StringModifier from "./stringModifier"; // Adjust the path as necessary
import StringModifierPlay from "./stringModifierPlay"; // Adjust the path as necessary

const BytePairingAlgorithm = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 mt-8">
        Byte Pairing Algorithm
      </h1>
      <div className="max-w-xl mx-auto">
        <p className="text-lg mb-4 text-justify">
          If we have a limited context length how can we fit as many words as
          possible? Let's say we have a string:{" "}
          <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
            aabdaaabac
          </code>
          . Can we make it shorter? The main idea of byte pairing algorithm is
          to find the most frequent pair in the text, and replcae the pair with
          a new text.
        </p>
        <p className="text-lg">
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
      <div className="max-w-xl mx-auto">
        <p className="text-lg mt-4 text-justify">
          You are a smart 🍄 if you are able to make the string length equal to
          5! The compression rate is 5/11 = 45%.
        </p>
        <p className="text-lg mt-2 text-justify">
          So how is this related to tokenizer in LLM? Since this algorithm can
          effectively reduces the length of the text, we can apply it on our
          sequence of tokens too. The context length defines how much
          information the model can consider at any one time. For the same
          context length, if one contain little information, LLM has less
          "content" fits into a given context length. So of course, an effective
          tokenization method is to efficiently pack more meaningful information
          into the same number of tokens using different strategies like
          byte-pair encoding and WordPiece.
        </p>
      </div>
    </div>
  );
};

export default BytePairingAlgorithm;
