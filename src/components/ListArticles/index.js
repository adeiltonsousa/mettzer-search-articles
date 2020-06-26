import React, { useState } from "react";
import { useResultSearch } from "../../store/resultSearch";

import { Container } from "./styles";

function ListArticles() {
  const { resultSearch, setResultSearch } = useResultSearch([]);

  return (
    <Container>
      <div>
        {resultSearch.map((itemArticle) => (
          <li key={itemArticle.id}>{itemArticle.title}</li>
        ))}
      </div>
    </Container>
  );
}

export default ListArticles;
