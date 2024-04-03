// import VimeoVideo from "../videoDisplay";
import CodeRunner from "../codeRunner";
import { nonEnglish, unicodeConversion } from "../data";
import Subsection from "../subSection";
import Calculation from "./4.1BaseCalculation";

const ASCII = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 mt-8">
        Simple explain ASCII, Unicode, and Bytes
      </h1>
      <div className="max-w-xl mx-auto">
        <p className="text-lg mb-4 text-justify">
          Let's start with ASCII code to understand Unicode. ASCII code is for
          English characters, digits, punctuation marks, and control characters,
          totaling 256 characters (8 bits). On the other hand, Unicode covers
          characters from all the languages in the world. Each of these
          characters has its own unique number assigned to it, and we call these
          numbers "code points." There are several ways to encode a string to
          Unicode: UTF-8, UTF-16, and UTF-32. Most people use UTF-8.
        </p>
        <p className="text-lg mb-4 text-justify">
          ASCII and Unicode can be represented in bytes. A byte is a unit of
          digital information that most commonly consists of eight bits. A
          single byte can represent values from 0 to 255.
        </p>
        <p className="text-lg mb-4 text-justify">
          Let's consider the ASCII representation of "Cat". Each character is
          represented by a byte in memory. For simplicity, let's look at their
          ASCII values:
        </p>
        <ul className="text-lg">
          <li>C = 67</li>
          <li>a = 97</li>
          <li>t = 116</li>
        </ul>
        <p className="text-lg mt-4 mb-4 text-justify">
          So, "Cat" in bytes (in ASCII encoding) can be seen as a sequence: [67,
          97, 116].
        </p>
        <p className="text-lg mt-4 mb-4 text-justify">
          How to translate between ASCII and Unicode then?
        </p>
        <ul className="list-disc text-lg">
          <li className="text-left">
            ASCII: Used for English only. It ranges from 0 to 255.
          </li>
          <li className="text-left">
            Unicode: Suitable for all languages. It's a base-
            <span className="bg-blue-300 rounded-lg">16</span> system using
            0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F.
          </li>
        </ul>
        <Subsection>
          <h2 className="text-lg font-semibold">What is a base-16 system?</h2>
          <p className="text-gray-700 text-justify mt-2">
            You don't know base-16? How about the base-2 system? What? You don't
            know either? Okay, at least I'm pretty sure you know the base-10
            system. <br></br>
            <p className="text-gray-700 text-justify mt-4">
              <p className="font-bold">Base-10 system:</p>
              In our base-10 system, we have ten digits: 0, 1, 2, 3, 4, 5, 6, 7,
              8, 9. When we count, we cycle through these digits, and each
              position represents a power of 10. For example, the number{" "}
              <span className="bg-yellow-500 rounded-lg">1</span>
              <span className="bg-green-500 rounded-lg">2</span>
              <span className="bg-orange-500 rounded-lg">5</span> in base-10
              means:
              <div className="text-xl text-center mt-1">
                <span className="bg-yellow-500 rounded-lg">1</span>× 10
                <sup>2</sup>+<span className="bg-green-500 rounded-lg">2</span>×
                10
                <sup>1</sup>+<span className="bg-orange-500 rounded-lg">5</span>
                ×10
                <sup>0</sup> = 125.
              </div>
              <p className="font-bold mt-2">Base-2 system:</p>
              In our base-2 system, we only have two digits: 0 and 1. Each
              position represents a power of 2. So the binary number{" "}
              <span className="bg-yellow-500 rounded-lg">1</span>
              <span className="bg-green-500 rounded-lg">0</span>
              <span className="bg-orange-500 rounded-lg">1</span> means:
              <br></br>
              <div className="text-xl text-center mt-1">
                <span className="bg-yellow-500 rounded-lg">1</span> × 2
                <sup>2</sup> +<span className="bg-green-500 rounded-lg">0</span>{" "}
                ×2
                <sup>1</sup> +
                <span className="bg-orange-500 rounded-lg">1</span> × 2
                <sup>0</sup> = 5.
              </div>
            </p>
          </p>
        </Subsection>
        <p className="text-lg mt-4 mb-4 text-justify">
          For instance, Unicode U+00
          <span className="bg-yellow-500 rounded-lg">4</span>
          <span className="bg-green-500 rounded-lg">1</span> = A. Here's why:
          <br></br>
          <Calculation></Calculation>
          <div className="flex justify-center items-center mt-8 sebmb-4">
            <p>Answer for ASCII(65)</p>
            <img
              src="/ASCII_table.png"
              alt="ASCII_table"
              style={{ maxWidth: "none", width: "800px" }}
            />
          </div>
        </p>
        <p className="text-lg mt-4 mb-4 text-justify">
          Change the text to run with your own Python example. If you pay
          attention to English vs non English output and compare the difference
          between ASCII vs Unicode, it’s so interesting!
        </p>
        <p className="text-lg mt-4 mb-4 text-justify">
          Play(a): How is non-English character encoded in Unicode look like?
          <br></br>
          Play(b): How does it look like in byte values (integer)? Hint: Create
          a{" "}
          <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
            list(unicode_encoded_list)
          </code>
        </p>
        <div className="flex flex-col items-center justify-center">
          <CodeRunner initialCode={nonEnglish} />{" "}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mt-4 mb-4 text-justify">
            Play(c): How does Unicode and ASCII difference in byte conversion
            and decoding?
          </p>
          <div className="flex flex-col items-center justify-center">
            <CodeRunner initialCode={unicodeConversion} />{" "}
          </div>
        </div>
        <p className="text-lg mt-4 mb-4 text-justify">
          Learning about ASCII, Unicode, and Bytes is essential because we need
          to convert our strings into sequences of bytes (numbers) that the
          computer can understand. This is a important step in building our
          tokenizers.
        </p>
        <p className="text-lg mt-4 mb-4">
          Let’s feed in our bytes sequences into LLM now?{" "}
        </p>
        <p className="text-lg mt-4 mb-4 text-justify">
          No, that’s a bad idea. Our byte sequences is pretty long. It means
          that we will put little information into our LLM. Can we use some sort
          of compression method to make it better? Let’s play with Byte Pairing
          Algorithm.
        </p>
      </div>
    </div>
  );
};

export default ASCII;
