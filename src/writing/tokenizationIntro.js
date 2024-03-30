import VimeoVideo from "../videoDisplay";

const TokenizationIntro = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 mt-8">
        What is tokenization?
      </h1>
      <div className="max-w-xl mx-auto">
        <VimeoVideo></VimeoVideo>
        <p className="text-lg mb-4 text-justify">
          Tokenization is the process of converting raw text into a sequence of
          tokens. Simply put, it involves converting characters and words into
          integers which can then be used to train our Language Model. <br />
          For instance, if you visit the popular tokenization method,{" "}
          <a
            href="https://tiktokenizer.vercel.app/?encoder=gpt2"
            className="text-blue-500 hover:underline"
          >
            Tiktokenizer
          </a>
          , you'll see how{" "}
          <code
            className="inline-block rounded-lg bg-gray-200 px-2 py-1"
            style={{ position: "relative" }}
          >
            <span className="highlight-space-before"> </span> rreturn
          </code>{" "}
          is tokenized to 1441.
          <div className="flex justify-center items-center mt-4 mb-4">
            <img
              src="/1.png"
              alt="tokenizer1"
              style={{ maxWidth: "none", width: "900px" }}
            />
          </div>
          If you experiment, you'll notice that the identical word "egg" and
          "Egg" are separated differently when one begins with a lowercase
          letter and the other with an uppercase letter. Similarly, in math
          addition, you'll observe that 5761 is not treated as a single token
          but is split into 576 and 1.
        </p>
        <div className="flex justify-center items-center mt-4 mb-4"></div>

        <p className="text-lg">
          For instance, what if{" "}
          <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
            Z=aa
          </code>
          ?
        </p>
      </div>
    </div>
  );
};

export default TokenizationIntro;
