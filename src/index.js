import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));

// 下は１・７．２用一旦コメントアウト
// import App from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
//   , document.getElementById("root")
// );
