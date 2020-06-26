import React, { createContext, useState, useContext } from "react";

const ResultSearchContext = createContext();

export default function ResultSearchProvider({ children }) {
  const [resultSearch, setResultSearch] = useState([]);

  return (
    <ResultSearchContext.Provider
      value={{
        resultSearch,
        setResultSearch,
      }}
    >
      {children}
    </ResultSearchContext.Provider>
  );
}

export function useResultSearch() {
  const context = useContext(ResultSearchContext);
  const { resultSearch, setResultSearch } = context;
  return { resultSearch, setResultSearch };
}
