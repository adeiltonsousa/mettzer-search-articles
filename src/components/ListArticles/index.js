import React, { useState } from "react";
import { useResultSearch } from "../../store/resultSearch";
import { Table, Button, Tooltip } from "antd";
import { Container } from "./styles";
import { FileDoneOutlined } from "@ant-design/icons";

function ListArticles() {
  const { resultSearch, setResultSearch } = useResultSearch([]);
  let data = [];

  const columns = [
    { title: "Autor", dataIndex: "authors", key: "authors" },
    { title: "Título", dataIndex: "title", key: "title" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Baixar", dataIndex: "fulltextUrls", key: "fulltextUrls" },
    { title: "Add Favoritos", dataIndex: "favorite", key: "favorite" },
  ];

  function addFavoritos() {}

  {
    resultSearch.map((itemArticle) =>
      data.push({
        key: itemArticle.id,
        authors: itemArticle?.authors.toString(),
        type: itemArticle?.types.toString() || "- - -",
        title: itemArticle?.title,
        description: itemArticle?.description,
        fulltextUrls: <a href={itemArticle.fulltextUrls[0]}>Baixar</a>,
        favorite: (
          <Tooltip title="Adicinar a favoritos">
            <Button type="primary" shape="circle" icon={<FileDoneOutlined />} />
          </Tooltip>
        ),
      })
    );
  }

  return (
    <Container>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </Container>
  );
}

export default ListArticles;
