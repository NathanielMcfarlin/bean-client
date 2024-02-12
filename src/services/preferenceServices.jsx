export const getPreferences = () => {
  return fetch(`http://localhost:8000/preferences`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
}

export const getPreferenceByID = (preferenceId) => {
  return fetch(`http://localhost:8000/preferences/${preferenceId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
}