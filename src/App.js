import React from "react";
import GlobalStyle from "./styles/global.js";
import SearchArticles from "./components/SearchArticles/index.js";
import "antd/dist/antd.css";
import QuerySearchProvider from "./store/querySearch";
import ResultSearchProvider from "./store/resultSearch";
import ListArticles from "./components/ListArticles/index.js";

function App() {
  return (
    <>
      <QuerySearchProvider>
        <ResultSearchProvider>
          <GlobalStyle />
          <SearchArticles />
          <ListArticles />
        </ResultSearchProvider>
      </QuerySearchProvider>
    </>
  );
}

export default App;
