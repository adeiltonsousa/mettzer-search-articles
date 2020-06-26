import React, { useState } from "react";
import { Input, InputNumber } from "antd";
import api from "../../services/api";
import { Container } from "./styles";
import { useQuerySearch } from "../../store/querySearch";
import { useResultSearch } from "../../store/resultSearch";

function SearchArticles() {
  const { resultSearch, setResultSearch } = useResultSearch("");
  const { query, setQuery } = useQuerySearch("");
  const [PageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const { Search } = Input;

  async function loadArticles(termSearch) {
    setQuery(termSearch);
    const apiKey = "EvLx9o8M4pI32OtkVX0Yri6HNZbnCJTA";

    await api
      .get(
        `${termSearch}?page=${page}&pageSize=${PageSize}&urls=true&apiKey=${apiKey}`
      )
      .then((response) => setResultSearch(response.data))
      .catch((e) => {
        console.log(e);
      });
  }

  function onChangeSizePage(value) {
    setPageSize(value);
  }

  console.log(resultSearch);
  console.log(query);

  return (
    <Container>
      <InputNumber
        min={10}
        max={100}
        defaultValue={10}
        onChange={onChangeSizePage}
      />
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
