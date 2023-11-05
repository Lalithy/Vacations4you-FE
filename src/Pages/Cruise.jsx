import React, { useState, useEffect } from "react";
import "../style/cruise.css";
import { FaShoppingCart } from "react-icons/fa";
import RatingStars from "../components/RatingStars";
import CruiseCart from "../components/CruiseCart";
import CruiseService from "../service/cruiseService";
import CruiseClient from "../service-client/cruiseClient";

function Cruise() {
  const [cartsVisibility, setCartVisible] = useState(false);
  const [cruisesInCart, setCruise] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cruisesInCart));
  }, [cruisesInCart]);
  const addCruiseToCart = (cruise) => {
    const newCruise = {
      ...cruise,
      count: 1,
    };
    setCruise([...cruisesInCart, newCruise]);
  };

  //Get all cruise
  const [cruiseDetails, setCruiseDetails] = useState([]);

  useEffect(() => {
    const cruiseService = new CruiseService(CruiseClient);
    const fetchCruise = async () => {
      try {
        const cruiseList = await cruiseService.getAllCruise();
        setCruiseDetails(cruiseList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCruise();
  }, []);

  const onQuantityChange = (cruiseId, count) => {
    setCruise((oldState) => {
      const cruisesIndex = oldState.findIndex((item) => item._id === cruiseId);
      if (cruisesIndex !== -1) {
        oldState[cruisesIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onCruiseRemove = (cruise) => {
    setCruise((oldState) => {
      const cruisesIndex = oldState.findIndex(
        (item) => item._id === cruise._id
      );
      if (cruisesIndex !== -1) {
        oldState.splice(cruisesIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <div className="cruise-app">
      <div>{/* searching criteria */}</div>
      <CruiseCart
        visibility={cartsVisibility}
        cruises={cruisesInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onCruiseRemove={onCruiseRemove}
      />
      <div className="navbar-cart">
        <button
          className="btn cruise-cart-btn"
          onClick={() => setCartVisible(true)}
        >
          <FaShoppingCart size={24} />
          {cruisesInCart.length > 0 && (
            <span className="cruise-count">{cruisesInCart.length}</span>
          )}
        </button>
      </div>
      <main>
        <h2 className="title">Available Cruise Packages</h2>
        <div className="cruises">
          {cruiseDetails.map((cruise) => (
            <div className="cruise" key={cruise._id}>
              <img
                className="cruise-image"
                src={cruise.image_path}
                alt={cruise.image_path}
              />
              <h4 className="cruise-name">{cruise.name}</h4>
              <RatingStars rating={cruise.rating} />
              <p>
                <strong>Cabin - </strong>
                {cruise.cabin}
              </p>
              <p>
                <strong>Deck - </strong>
                {cruise.deck}
              </p>
              <p>
                <strong>Price - </strong>
                {cruise.price}
              </p>
              <p>
                <strong>Arrival - </strong>
                {cruise.arrival}
              </p>
              <p>
                <strong>Departure - </strong>
                {cruise.departure}
              </p>
              <p>
                <strong>Duration - </strong>
                {cruise.duration}
              </p>
              <p>
                <strong>Provider - </strong>
                {cruise.cruise_provider}
              </p>
              <p>
                <strong>Arrival Date - </strong>
                {cruise.arrival_date}
              </p>
              <p>
                <strong>Departure Date - </strong>
                {cruise.departure_date}
              </p>
              <span className="cruise-price">{cruise.price}$</span>
              <div className="buttons">
                <button className="btn" onClick={() => addCruiseToCart(cruise)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Cruise;
