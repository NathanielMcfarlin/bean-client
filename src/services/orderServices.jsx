export const getOrders = () => {
  return fetch(`http://localhost:8000/orders`, {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getOrderById = (orderId) => {
  return fetch(`http://localhost:8000/orders/${orderId}`, {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const createOrder = (order) => {
  return fetch(`http://localhost:8000/orders`, {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  }).then((res) => res.json());
};

export const editOrder = (orderId) => {
  return fetch(`http://localhost:8000/orders/${orderId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    }
  });
};

export const deleteShoppingCart = (orderId) => {
  return fetch(`http://localhost:8000/orders/${orderId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  });
};