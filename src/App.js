import React from "react";
import GlobalStyle from "./styles/global.js";
import "./styles/App.css";
import SearchArticles from "./components/SearchArticles/index.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchArticles />
    </>
  );
}

export default App;
