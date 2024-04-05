import CodeRunner from "../codeRunner";

const TokenHowTo = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 mt-8">
        How to do tokenization?
      </h1>
      <div className="max-w-xl mx-auto">
        <p className="text-lg mb-4 text-justify">
          The first question to ask is: How do we even convert English or non
          English words into numbers? To understand what is even a string in
          python, we need to understand the concept of unicode. If you put in
          <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
            ord("e")
          </code>
          in your jupyter notebook, it will return 101. If you look through the
          documentation of ord, you will see ord is<br></br>
        </p>
        <blockquote className="text-lg mb-4 border-s-4 border-gray-300 bg-gray-50 ">
          The ord() function returns the number representing the unicode code of
          a specified character.
        </blockquote>
      </div>
      <div className="flex flex-col items-center justify-center">
        {" "}
        <CodeRunner
          className="max-h-[200px]"
          initialCode={`print([ord(x)for x in "hello 我是可憐的失業仔 👋"])`}
        ></CodeRunner>
      </div>
    </div>
  );
};

export default TokenHowTo;
