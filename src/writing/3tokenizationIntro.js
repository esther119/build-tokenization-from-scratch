// import VimeoVideo from "../videoDisplay";

const TokenizationIntro = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 mt-8">
        What is tokenization?
      </h1>
      <div className="max-w-xl mx-auto">
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
          </a>{" "}
          (My friends ask me if it is Tiktok, it's not haha.) , you'll see how{" "}
          <code
            className="inline-block rounded-lg bg-gray-200 px-2 py-1"
            style={{ position: "relative" }}
          >
            <span className="highlight-space-before"> </span> ·return
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
        <div className="flex justify-center items-center mt-4 mb-4">
          <img
            src="/3.png"
            alt="tokenizer1"
            style={{ maxWidth: "none", width: "900px" }}
          />
        </div>

        <p className="text-lg mt-4 mb-4 text-justify">
          What happens if you input code into the tokenizer? Does a single space
          indentation represent one token or does it represent multiple spaces
          as a single token? How does the tokenization of space differ in GPT-2
          compared to GPT-4? What about the tokenization of different languages?
          If I input Mandarin or Japanese, wait a minute…every single character
          is a token. This implies that using Mandarin or Japanese likely
          requires more tokens to express the same meaning as in English. This
          could be one reason why non-English languages usually perform worse.
        </p>
        <div className="flex justify-center items-center mt-4 mb-4">
          <img
            src="/2.png"
            alt="tokenizer1"
            style={{ maxWidth: "none", width: "900px" }}
          />
        </div>

        <p className="text-lg mt-4 mb-4 text-justify">
          <p className="flex justify-center item-center text-lg mt-4 mb-2 text-justify">
            You ask me why?
          </p>
          <p className="flex justify-center item-center text-lg mt-4 mb-2 text-justify">
            Think of an LLM having a limited context length like a person's
            working memory. If the working memory is big, the LLM can absorb and
            recall a ton of information. But if the context limit is petite, the
            LLM turns into my alzheimer grandpa who can't remember anything.{" "}
          </p>
          <p className="flex justify-center item-center text-lg mt-4 mb-2 text-justify">
            If we can't alter the context length limit, our next best option is
            to use tokenization to cram in as much useful information as we can.
            For instance, if we have a super long sequence that stores little
            information, like this Japanese and Mandarin example, of course, the
            LLM will remember little, and the performance is just as
            disappointing. We will use Byte Pairing Algorithm later to explain
            this idea in detailed example.
          </p>
          <p className="flex justify-center item-center text-lg mt-4 mb-2 text-justify"></p>
          Now, try inputting the same data into both GPT2 and GPT4. Which one
          has longer tokens? Is OpenAI able to effectively reduce the token
          lengths for the same information?
        </p>
      </div>
    </div>
  );
};

export default TokenizationIntro;
