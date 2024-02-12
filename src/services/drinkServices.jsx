export const getDrinks = () => {
  return fetch(`http://localhost:8000/drinks`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
}

export const getDrinkByID = (drinkId) => {
  return fetch(`http://localhost:8000/drinks/${drinkId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
}