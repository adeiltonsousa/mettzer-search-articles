import React from "react";
import GlobalStyle from "./styles/global.js";
import SearchArticles from "./components/SearchArticles/index.js";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchArticles />
    </>
  );
}

export default App;
