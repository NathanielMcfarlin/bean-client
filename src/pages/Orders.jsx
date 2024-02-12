import React, { useState, useEffect } from 'react';
import "./pages.css"
import { DrinkCard } from './drinks';
import { getDrinks } from '../services/drinkServices';


export const NewOrderForm = ({ updateOrderedDrinksCount }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getDrinks().then((drinksArray) => {
      setDrinks(drinksArray);
    });
  }, []);

  // const createNewOrder = async () => {
  //   const newOrder = {
  //     user: 1,
  //     datetime: '',
  //     purchased: false
  //   };

  //   try {
  //     await createOrder(newOrder);
  //     getOrders().then((ordersArray) => {
  //       setOrders(ordersArray);
  //     }); // Reset the orders state
  //   } catch (error) {
  //     console.error('Failed to create a new order:', error);
  //   }
  // };



  return (
    <div className="container">
      <h1 className="title">Place New Order</h1>
      <div className='grid-container'>
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} updateOrderedDrinksCount={updateOrderedDrinksCount} />))}
      </div>
    </div>
  );
};
