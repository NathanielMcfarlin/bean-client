import { useEffect, useState } from "react";
import { getOrders } from "../services/orderServices";
import { getPastOrders } from "../services/cartService";
import "./pages.css"

export const PastOrders = () => {
  const [orders, setOrders] = useState([]);
  const [orderedDrinks, setOrderedDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ordersArray = await getOrders();
      const orderedDrinksArray = await getPastOrders();

      setOrders(ordersArray);
      setOrderedDrinks(orderedDrinksArray);
    };

    fetchData();
  }, []);

  console.log("Ordered Drinks:", orderedDrinks);

  return (
    <div>
      <h1 className="title">Past Orders</h1>
      <div className="order-cards-container">
        {orders.map((order) => (
          <div key={order.id} className="past-order-card">
            <div className="card-body">
              <p className="card-content">Order: {order.id}</p>
              <p className="card-content">Date: {order.datetime}</p>
              <p className="card-content">Quantity: {orderedDrinks.filter((drink) => drink.order === order.id).length}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};