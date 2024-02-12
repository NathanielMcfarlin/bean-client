import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import { Home } from "../pages/Home";
import { NewOrderForm } from "../pages/Orders";
import { Cart } from "../pages/cart";
import { PastOrders } from "../pages/pastOrders";



export const ApplicationViews = ({ token, setToken, updateOrderedDrinksCount }) => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
          <Route path="/" element={<Home setToken={setToken} />} />
          <Route path="/place_order" element={<NewOrderForm setToken={setToken} updateOrderedDrinksCount={updateOrderedDrinksCount} />} />
          <Route path="/cart" element={<Cart setToken={setToken} />} />
          <Route path="/past_orders" element={<PastOrders setToken={setToken} />} />
        </Route>
      </Routes>
    </>
  );
};