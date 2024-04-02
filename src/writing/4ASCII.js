// import VimeoVideo from "../videoDisplay";
import CodeRunner from "../codeRunner";
import { nonEnglish, unicodeConversion } from "../data";

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
            Unicode: Suitable for all languages. It's a{" "}
            <span className="bg-blue-300 rounded-lg">16</span>-digit system
            using 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F.
          </li>
        </ul>
        <p className="text-lg mt-4 mb-4 text-justify">
          For instance, Unicode U+00
          <span className="bg-yellow-500 rounded-lg">4</span>
          <span className="bg-green-500 rounded-lg">1</span> = A. Here's why:
          <br></br>
          <div className="flex justify-center mt-8">
            <span className="bg-yellow-500 rounded-lg">4</span>*{" "}
            <span className="bg-blue-300 rounded-lg">16</span>
            <sup>1</sup> + <span className="bg-green-500 rounded-lg">1</span>*{" "}
            <span className="bg-blue-300 rounded-lg">16</span>
            <sup>0</sup> = 64+1= 65, and ASCII(65) = A
          </div>
          <div className="flex justify-center items-center mt-4 mb-4">
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
          Play(b): How does it look like in byte values? Hint: Make it a{" "}
          <code className="inline-block rounded-lg bg-gray-200 px-2 py-1">
            list
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
      </div>
    </div>
  );
};

export default ASCII;
