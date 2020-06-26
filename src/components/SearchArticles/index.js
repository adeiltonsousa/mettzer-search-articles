import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Container } from "./styles";

function SearchArticles() {
  const [articles, setArticles] = useState({});
  const [query, setQuery] = useState({});

  useEffect(() => {
    setQuery({
      query: "Education",
      page: 10,
      pageSize: 0,
      scrollId: "",
    });
  }, []);

  async function loadArticles() {
    const response = await api
      .get(
        `Education?page=2&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=EvLx9o8M4pI32OtkVX0Yri6HNZbnCJTA`
      )
      .then((response) => console.log(response))
      .catch((e) => {
        console.log(e);
      });
    console.log(articles);
  }

  return (
    <Container>
      <button onClick={loadArticles}> Busca</button>
    </Container>
  );
}

export default SearchArticles;
