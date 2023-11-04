import React, { useState, useEffect } from "react";
import "../style/cruise.css";
import { FaShoppingCart } from "react-icons/fa";
import RatingStars from "../components/RatingStars";
import CruiseCart from "../components/CruiseCart";

const cruises = [
  {
    id: 1,
    name: "Carnival Cruise Line",
    rating: 4.3,
    description:
      "Carnival Cruise Line is an international cruise line with headquarters in Doral, Florida.",
    price: 199,
    image: require("../assets/images/cruise-1.png"),
  },
  {
    id: 2,
    name: "Princess Cruises",
    rating: 4.2,
    description:
      "Princess Cruises is an American cruise line owned by Carnival Corporation & plc.",
    price: 229,
    image: require("../assets/images/cruise-2.png"),
  },
  {
    id: 3,
    name: "Norwegian Cruise Line",
    rating: 3.2,
    description:
      "Norwegian Cruise Line, also known in short as Norwegian, is an American cruise line founded in Norway in 1966.",
    price: 99,
    image: require("../assets/images/cruise-3.png"),
  },
  {
    id: 4,
    name: "Holland America Line",
    rating: 4.8,
    description:
      "Holland America Line is a US-owned cruise line, a subsidiary of Carnival Corporation & plc headquartered in Seattle.",
    price: 119,
    image: require("../assets/images/cruise-4.png"),
  },
  {
    id: 5,
    name: "Viking Cruises",
    rating: 4.5,
    description:
      "Viking is a cruise line providing river, ocean, and expedition cruises.",
    price: 85,
    image: require("../assets/images/cruise-5.png"),
  },
  {
    id: 6,
    name: "Celebrity Cruises",
    rating: 3.8,
    description:
      "Celebrity Cruises is a cruise line headquartered in Miami, Florida and a wholly owned subsidiary of Royal Caribbean Group.",
    price: 149,
    image: require("../assets/images/cruise-6.png"),
  },
];

function Cruise() {
  const [cartsVisibilty, setCartVisible] = useState(false);
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

  const onQuantityChange = (cruiseId, count) => {
    setCruise((oldState) => {
      const cruisesIndex = oldState.findIndex((item) => item.id === cruiseId);
      if (cruisesIndex !== -1) {
        oldState[cruisesIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onCruiseRemove = (cruise) => {
    setCruise((oldState) => {
      const cruisesIndex = oldState.findIndex((item) => item.id === cruise.id);
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
        visibilty={cartsVisibilty}
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
          {cruises.map((cruise) => (
            <div className="cruise" key={cruise.id}>
              <img
                className="cruise-image"
                src={cruise.image}
                alt={cruise.image}
              />
              <h4 className="cruise-name">{cruise.name}</h4>
              <RatingStars rating={cruise.rating} />
              <p>{cruise.description}</p>
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
