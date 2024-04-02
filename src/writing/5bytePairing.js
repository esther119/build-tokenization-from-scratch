import React from "react";
import StringModifier from "../stringModifier"; // Adjust the path as necessary
import StringModifierPlay from "../stringModifierPlay"; // Adjust the path as necessary

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
          So, what's the connection between this and tokenization in Language
          Models (LLM)? Since the Byte Pair Encoding (BPE) algorithm effectively
          reduces text length, it can also be applied to our token sequence. The
          context length defines the maximum number of tokens the model can
          consider at any given time. If a token contains little information,
          LLM has less "content" that fits into a given context length. If your
          tokenization strategy results in highly granular tokens (e.g.,
          characters or very small subwords), you might end up with numerous
          tokens that don't carry much information individually.
        </p>
        <p className="text-lg mt-2 text-justify">
          Therefore, an effective tokenization method aims to efficiently pack
          more meaningful information into our token space. This can be achieved
          using different strategies like byte-pair encoding and WordPiece, to
          increase the information density.
        </p>
        <p className="text-lg mt-2 text-justify">
          The BPE algorithm explains why non-English usually performs worse.
          Since there is less training data for non-English documents, we have
          fewer frequent pairs to replace, and therefore are left with more
          individual tokens.
        </p>
        <p className="text-lg mt-2 mb-12 text-justify">
          Damn, when I show this section to my business friend, even she can
          understand!{" "}
        </p>
      </div>
    </div>
  );
};

export default BytePairingAlgorithm;
