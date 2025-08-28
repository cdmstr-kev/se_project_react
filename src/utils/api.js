const baseUrl = "http://localhost:3001";

const handleAPIResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`HTTP ${res.status}: ${res.statusText}`));
};

const makeRequest = (endpoint, options = {}) => {
  return fetch(`${baseUrl}${endpoint}`, options).then(handleAPIResponse);
};

function getItems() {
  return makeRequest("/items");
}

function addItem(item) {
  return makeRequest("/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
}

function deleteItem(id) {
  return makeRequest(`/items/${id}`, {
    method: "DELETE",
  });
}

export { getItems, addItem, deleteItem };
