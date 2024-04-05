// src/PythonEditor.js
import React, { useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

function PythonEditor({ code, setCode }) {
  useEffect(() => {
    // Dispatch resize event after component mounts
    window.dispatchEvent(new Event("resize"));
  }, []);
  return (
    <div className="w-full overflow-x-scroll">
      <AceEditor
        mode="python"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={code}
        onChange={setCode}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}

export default PythonEditor;
