import React, { createContext, useState, useContext } from "react";

const QuerySearchContext = createContext();

export default function QuerySearchProvider({ children }) {
  const [query, setQuery] = useState("");

  return (
    <QuerySearchContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </QuerySearchContext.Provider>
  );
}

export function useQuerySearch() {
  const context = useContext(QuerySearchContext);
  const { query, setQuery } = context;
  return { query, setQuery };
}
