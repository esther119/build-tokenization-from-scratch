import React from "react";

const Subsection = ({ children }) => {
  return (
    <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 mt-4 mb-4">
      {children}
    </div>
  );
};

export default Subsection;
