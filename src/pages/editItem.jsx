import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { deleteOrderedDrink, editOrderedDrink, getOrderedDrinkById } from "../services/orderedDrinksServices";
import { getPreferences } from "../services/preferenceServices";
import { getDrinks } from "../services/drinkServices";
import "./pages.css";



export const EditDrinkCard = ({ orderedDrink, onDeleteOrderedDrink }) => {
  let { drinkId } = useParams();
  const [drinks, setDrinks] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [orderedDrinks, setOrderedDrinks] = useState({});

  const orderedDrinkId = orderedDrink.id;

  const fetchOrderedDrink = () => {
    getOrderedDrinkById(orderedDrinkId).then((fetchedDrink) => {
      setOrderedDrinks(fetchedDrink)
    })
  };

  const fetchPreference = () => {
    getPreferences().then((preferencesArray) => {
      setPreferences(preferencesArray)
    })
  };

  const fetchDrink = () => {
    getDrinks().then((drinksArray) => {
      setDrinks(drinksArray)
    })
  };

  useEffect(() => {
    fetchOrderedDrink();
    fetchPreference();
    fetchDrink();

  }, [drinkId]);

  useEffect(() => {
    setOrderedDrinks({
      order: orderedDrink.order,
      drink: orderedDrink.drink.id,
      preference: orderedDrink.preference.id
    });
  }, [orderedDrink]);

  const handleDrinkChange = (e) => {
    const newDrinkId = e.target.value;
    const selectedDrink = drinks.find(drink => drink.id === parseInt(newDrinkId));
    setOrderedDrinks(prevState => ({
      ...prevState,
      drink: selectedDrink.id
    }));
  };

  const handlePreferenceChange = (e) => {
    const newPreferenceId = e.target.value;
    const selectedPreference = preferences.find(preference => preference.id === parseInt(newPreferenceId));
    setOrderedDrinks(prevState => ({
      ...prevState,
      preference: selectedPreference.id
    }));
  };

  const handleUpdate = () => {
    editOrderedDrink(orderedDrinks).then((updatedItem) => {
      setOrderedDrinks(updatedItem);
    });
  };

  const handleDeleteOrderedDrink = () => {
    onDeleteOrderedDrink(orderedDrink.id);
  };

  return (
    <section className="edit-drink-card">
      <div key={orderedDrink.id}>
        <div className="edit-drink-card-row">
          <select
            onChange={handleDrinkChange}
            value={orderedDrinks.drink}
            required
            className="edit-drink-card-select"
          >
            <option value="" disabled>
              Select a Drink
            </option>
            {drinks.map((drink) => (
              <option key={drink.id} value={drink.id}>
                {drink.name}
              </option>
            ))}
          </select>
          <select
            onChange={handlePreferenceChange}
            value={orderedDrinks.preference}
            required
            className="edit-drink-card-select"
          >
            <option value="" disabled>
              Select a Preference
            </option>
            {preferences.map((preference) => (
              <option key={preference.id} value={preference.id}>
                {preference.temperature}
              </option>
            ))}
          </select>
        </div>
        <div className="edit-drink-card-row">
          <button onClick={handleDeleteOrderedDrink} className="remove-drink-button">
            Remove Drink
          </button>
          <button onClick={handleUpdate} className="edit-drink-button">
            Update Drink
          </button>
        </div>
      </div>
    </section>
  );
};


