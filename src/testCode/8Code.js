import CodeRunnerCheck from "../codeRunnerCheck";
import { getPair } from "../data";

const CodeChecker = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-gray-900 mt-8 overflow-hidden">
        Code submission test
      </h1>
      {/* <div className="flex justify-center items-center mt-4 mb-4"></div> */}
      <div className="flex justify-center items-center w-full sm:w-2/3 mx-auto">
        <CodeRunnerCheck initialCode={getPair}></CodeRunnerCheck>
      </div>
    </div>
  );
};

export default CodeChecker;
