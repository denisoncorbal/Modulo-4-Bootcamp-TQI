import React from "react";
import ReactDOM from "react-dom";
import "./i18n";

import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);