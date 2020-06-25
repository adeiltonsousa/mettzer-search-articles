import React, { useState } from "react";

import * as SearchAPI from "../../services/api";

import { Container } from "./styles";

function SearchArticles() {
  const [articles, setArticles] = useState({});
  const [query, setQuery] = useState({});

  const loadArticles = () => {
    setQuery([
      {
        query: "Education",
        page: 10,
        pageSize: 0,
        scrollId: "",
      },
    ]);

    SearchAPI.search(query).then((response) => {
      return console.log(response.data);
    });
  };

  return (
    <Container>
      <button onClick={loadArticles}> Busca</button>
    </Container>
  );
}

export default SearchArticles;
