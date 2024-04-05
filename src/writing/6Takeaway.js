const TakeAway = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 mt-8">
        Take Away
      </h1>
      <div className="max-w-xl mx-auto">
        <p className="text-lg mb-4 text-justify">
          This is Part 1 of our series on learning how to build a tokenizer from
          scratch. Today, we learn:<br></br>
          <ol className="mt-4 mb-4 list-decimal">
            <li className="mb-2">
              The problem of limited context length: With a limited context
              length in LLM (aka LLM has limited working memory), the language
              model may not have access to enough preceding text to fully
              understand the context of the input. As a result, it may produce
              responses that are less accurate or contextually inappropriate.
            </li>
            <li className="mb-2">
              ASCII and Unicode: Standards for character encoding used to
              represent text in computers, crucial for processing and
              interpreting text inputs and outputs in LLMs. They allow us to
              convert text into byte sequences.
            </li>
            <li className="mb-2">
              Byte pairing: Technique for data compression and tokenization,
              involves identifying frequently occurring character pairs and
              replacing them with a single byte.
            </li>
          </ol>
          ASCII and Unicode help us encode text data into byte sequences. We can
          use byte pairing to optimize the representation of text data within a
          given context length, enhancing LLM performance for language
          generation and comprehension. This addresses our problem of limited
          context length.
        </p>
        <p className="text-lg mb-12 text-justify">
          So tired writing Part 1. I don’t know if I will write Part 2…
        </p>
      </div>
    </div>
  );
};

export default TakeAway;
