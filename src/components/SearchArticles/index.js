import React, { useState } from "react";
import { Input } from "antd";
import api from "../../services/api";
import { Container } from "./styles";
import { useQuerySearch } from "../../store/querySearch";
import { useResultSearch } from "../../store/resultSearch";

function SearchArticles() {
  const { resultSearch, setResultSearch } = useResultSearch("");
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
        `${termSearch}?page=${page}&pageSize=${pageSize}&urls=true&apiKey=${apiKey}`
      )
      .then((response) => setResultSearch(response.data))
      .catch((e) => {
        console.log(e);
      });
  }
  console.log(resultSearch);

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
