import React, { useState, useEffect } from "react";
import { Input, InputNumber } from "antd";
import api from "../../services/api";

import { Container } from "./styles";

function SearchArticles() {
  const [articles, setArticles] = useState({});
  const [query, setQuery] = useState({
    querySearch: "",
    page: 1,
    pageSize: 10,
  });

  const { Search } = Input;

  async function loadArticles(termSearch) {
    setQuery((query.querySearch = termSearch));
    const querySearch = query.querySearch;
    const page = query.page;
    const pageSize = query.pageSize;
    const apiKey = "EvLx9o8M4pI32OtkVX0Yri6HNZbnCJTA";

    await api
      .get(
        `${querySearch}?page=${page}&pageSize=${pageSize}&urls=true&apiKey=${apiKey}`
      )
      .then((response) => setArticles(response.data))
      .catch((e) => {
        console.log(e);
      });
  }

  console.log(articles);
  return (
    <Container>
      <Search
        placeholder="input search text"
        defaultValue="Brasil colonia"
        onSearch={(value) => loadArticles(value)}
        enterButton
      />
    </Container>
  );
}

export default SearchArticles;
