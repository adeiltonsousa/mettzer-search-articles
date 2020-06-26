import React, { useState, useEffect } from "react";
import { Input, InputNumber } from "antd";
import api from "../../services/api";
import { Container } from "./styles";
import useQuerySearch from "../../store/querySearch";

function SearchArticles() {
  const [articles, setArticles] = useState({});
  const { query, setQuery } = useQuerySearch("");

  const { Search } = Input;

  async function loadArticles(termSearch) {
    setQuery(termSearch);
    const querySearch = query;
    const page = 1;
    const pageSize = 10;
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
