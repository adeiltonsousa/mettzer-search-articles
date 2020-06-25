const api = "https://core.ac.uk:443/api-v2/articles";

const headers = {
  apiKey: "EvLx9o8M4pI32OtkVX0Yri6HNZbnCJTA",
};

export const search = (query) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((data) => data.articles);

// https://core.ac.uk:443/api-v2/articles/search?metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=EvLx9o8M4pI32OtkVX0Yri6HNZbnCJTA
