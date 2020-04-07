import React from "react";
const Loading = () => {
  return (
    <div className="loadingClick">
      <img
        className="rotate"
        src={require("../../img/loading-icon.png")}
        alt="loading"
      />
    </div>
  );
};

export default Loading;
