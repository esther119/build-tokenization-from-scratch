import React from "react";

function References() {
  return (
    <div className="mb-24">
      <hr className="my-2 border-gray-200" />
      <h2 className="text-3xl font-bold mb-2 text-gray-900 mt-2">References</h2>
      <ul className="text-left">
        <li>
          <span>ASCII table: </span>
          <a
            className="text-blue-500 hover:underline"
            href="https://theasciicode.com.ar/"
          >
            https://theasciicode.com.ar/
          </a>
        </li>
        <li>
          <span>Let's build the GPT Tokenizer: </span>
          <a
            className="text-blue-500 hover:underline"
            href="https://www.youtube.com/watch?v=zduSFxRajkE&t=2905s"
          >
            https://www.youtube.com/watch?v=zduSFxRajkE&t=2905s
          </a>
        </li>
        <li>
          <span>Tiktokenizer: </span>
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/dqbd/tiktokenizer"
          >
            https://github.com/dqbd/tiktokenizer
          </a>
        </li>
      </ul>
    </div>
  );
}

export default References;
