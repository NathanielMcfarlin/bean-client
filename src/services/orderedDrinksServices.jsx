export const getOrderedDrinks = () => {
  return fetch(`http://localhost:8000/ordered_drinks`, {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getOrderedDrinkById = (orderedDrinkId) => {
  return fetch(`http://localhost:8000/ordered_drinks/${orderedDrinkId}`, {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const createOrderedDrink = (orderedDrink) => {
  return fetch(`http://localhost:8000/ordered_drinks`, {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderedDrink),
  }).then((res) => res.json());
};

export const editOrderedDrink = (orderedDrink) => {
  return fetch(`http://localhost:8000/ordered_drinks/${orderedDrink.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderedDrink),
  });
};

export const deleteOrderedDrink = (orderedDrinkId) => {
  return fetch(`http://localhost:8000/ordered_drinks/${orderedDrinkId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  });
};