import { Link } from "react-router-dom"
import "./pages.css"

export const Home = ({ setToken, token }) => {
  return (
    <section>
      <div className="welcome-section">
        <div className="image-container">
          {/* Add a large image of a coffee shop */}
          <img src="https://cdn.5280.com/2023/06/HudsonHill_credit-Connor-Stehr-960x640.jpg" alt="Coffee Shop" />
        </div>
        <div className="info-container">
          <h1>Welcome to The Bean Coffee Shop</h1>
          <p>
            The Bean is your go-to destination for quality coffee. We take pride in serving freshly brewed
            coffee crafted from the finest beans around the world. Whether you're on the go or relaxing in our cozy
            atmosphere, we're dedicated to providing you with a delightful coffee experience.
          </p>
          <p>
            At The Bean, our mission is to make ordering your favorite coffee faster and easier, so you can focus on
            enjoying your day. Our baristas are passionate about their craft, ensuring each cup is a perfect
            blend of flavor and aroma.
          </p>
          <p>
            Visit us and explore our diverse menu of coffee specialties, teas, and delicious treats. We are open every day
            to serve you with the finest beverages and warm hospitality.
          </p>
          <div className="hours-of-operation">
            <h2>Hours of Operation</h2>
            <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
            <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
          </div>
          <Link to={`/place_order`}>
            <button className="add-drink-button">Place an Order</button>
          </Link>
        </div>
      </div>
    </section>
  )
}