import React from "react";
import GlobalStyle from "./styles/global.js";
import SearchArticles from "./components/SearchArticles/index.js";
import "antd/dist/antd.css";
import QuerySearchProvider from "./store/querySearch";
import ResultSearchProvider from "./store/resultSearch";
import ListArticles from "./components/ListArticles/index.js";
import Header from "./components/Header/index.js";

function App() {
  return (
    <>
      <QuerySearchProvider>
        <ResultSearchProvider>
          <Header />
          <GlobalStyle />
          <SearchArticles />
          <ListArticles />
        </ResultSearchProvider>
      </QuerySearchProvider>
    </>
  );
}

export default App;
