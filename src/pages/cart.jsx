import { useEffect, useState } from "react"
import { getDrinks } from "../services/drinkServices";
import { deleteShoppingCart, editOrder, } from "../services/orderServices";
import { deleteOrderedDrink, getOrderedDrinks } from "../services/orderedDrinksServices";
import { getPreferences } from "../services/preferenceServices";
import { getCart } from "../services/cartService";
import { EditDrinkCard } from "./editItem";

export const Cart = () => {
  const [order, setOrder] = useState({});
  const [orderedDrinks, setOrderedDrinks] = useState([]);



  useEffect(() => {

    getCart().then((orderArray) => {
      setOrder(orderArray)
    })

    getOrderedDrinks().then((orderedDrinksArray) => {
      setOrderedDrinks(orderedDrinksArray)
    })

  }, []);

  const handleClearCart = () => {
    deleteShoppingCart(order.id)
      .then(() => {
        setOrderedDrinks([]);
      })
      .catch((error) => {
        console.error('Error clearing cart:', error);
      });
  };


  const handleDeleteOrderedDrink = (orderedDrinkId) => {
    deleteOrderedDrink(orderedDrinkId)
      .then(() => {
        // Remove the deleted ordered drink from the state
        setOrderedDrinks(orderedDrinks.filter(drink => drink.id !== orderedDrinkId));
      })
      .catch((error) => {
        console.error('Error deleting ordered drink:', error);
      });
  };

  const handleSubmitOrder = () => {
    editOrder(order.id)
      .then(() => {
        // Reload the page
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error submitting order:', error);
      });
  };

  return (
    <div className="cart-container">
      <button onClick={handleClearCart} className="remove-cart-button">
        CLEAR CART
      </button>
      <div>
        {orderedDrinks.map((orderedDrink) => (
          <EditDrinkCard key={orderedDrink.id} orderedDrink={orderedDrink} onDeleteOrderedDrink={handleDeleteOrderedDrink} />
        ))}
      </div>

      <button onClick={handleSubmitOrder} className="submit-button">SUBMIT</button>
    </div>
  );
};


