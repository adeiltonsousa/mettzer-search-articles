import React from "react";
import GlobalStyle from "./styles/global.js";
import SearchArticles from "./components/SearchArticles/index.js";
import "antd/dist/antd.css";
import CityProvider from "./store/querySearch";
import ResultSearchProvider from "./store/resultSearch";

function App() {
  return (
    <>
      <CityProvider>
        <ResultSearchProvider>
          <GlobalStyle />
          <SearchArticles />
        </ResultSearchProvider>
      </CityProvider>
    </>
  );
}

export default App;
