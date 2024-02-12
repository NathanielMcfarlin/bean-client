import React, { useState, useEffect } from "react";
import { getPreferences } from "../services/preferenceServices";
import "./pages.css";
import { createOrderedDrink } from "../services/orderedDrinksServices";

export const DrinkCard = ({ drink }) => {
  const [preferences, setPreferences] = useState([]);
  const [selectedPreference, setSelectedPreference] = useState("");

  useEffect(() => {
    getPreferences().then((preferencesArray) => {
      setPreferences(preferencesArray);
    });
  }, []);

  const updatePreference = (e) => {
    setSelectedPreference(e.target.value);
  };

  const handleAddDrink = () => {
    // Capture drinkId and selectedPreference
    const drinkId = drink.id;
    const preferenceId = selectedPreference;

    // Log the values
    console.log("Drink ID:", drinkId);
    console.log("Preference ID:", preferenceId);

    // Make API POST request to ordered_drinks
    const orderedDrinkData = {
      drink: drinkId,
      preference: preferenceId,
      // Include any additional data you need for the ordered_drinks endpoint
    };

    createOrderedDrink(orderedDrinkData)
      .then((response) => {
        // Handle success
        console.log("Ordered drink created:", response);
        // Reset the selected preference
        setSelectedPreference("");
        // Depending on your requirements, you can perform additional actions here
      })
      .catch((error) => {
        // Handle error
        console.error("Error creating ordered drink:", error);
      });
  };

  return (
    <div className="grid-container">
      <div key={drink.id} className="grid">
        <div className="card">
          <img src={drink.drink_image} alt={drink.name} className="card-image" />
          <h3 className="card-title">{drink.name}</h3>
          <label className="card-label">Select Preference:</label>
          <select
            onChange={updatePreference}
            value={selectedPreference}
            required
            className="card-select"
          >
            <option value="" disabled>Select a Preference</option>
            {preferences.map((preference) => (
              <option key={preference.id} value={preference.id}>
                {preference.temperature}
              </option>
            ))}
          </select>
          <div
            onClick={handleAddDrink} // No need to pass drink.id here
            className="add-drink-button">
            Add Drink
          </div>
        </div>
      </div>
    </div>
  );
};
