const baseUrl = "http://localhost:3001";

const handleApiResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`HTTP ${res.status}: ${res.statusText}`));
};

const makeRequest = (endpoint, options = {}) => {
  return fetch(`${baseUrl}${endpoint}`, options).then(handleApiResponse);
};

function getItems() {
  return makeRequest("/items");
}

function addItem(item, token) {
  return makeRequest("/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  })
}

function deleteItem(id, token) {
  return makeRequest(`/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

function addCardLike(id, token) {
  return makeRequest(`/items/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

function removeCardLike(id, token) {
  return makeRequest(`/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export { getItems, addItem, deleteItem, handleApiResponse, addCardLike, removeCardLike };
