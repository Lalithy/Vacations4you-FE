import React, { useState, useEffect } from "react";
import "../style/cruise.css";
import { FaShoppingCart } from "react-icons/fa";
import RatingStars from "../components/RatingStars";
import CruiseCart from "../components/CruiseCart";
import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import axios from "axios";

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
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [cabin, setCabin] = React.useState("");
  const [deck, setDeck] = React.useState("");
  const [departure_date, setDepartureDate] = React.useState(null);
  const [arrival_date, setArrivalDate] = React.useState(null);

  const handleChangeDeparture = (event) => {
    setDeparture(event.target.value);
  };

  const handleChangeArrival = (event) => {
    setArrival(event.target.value);
  };

  const handleChangeDeck = (event) => {
    setDeck(event.target.value);
  };

  const handleChangeCabin = (event) => {
    setCabin(event.target.value);
  };

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

  const apiUrl = "http://localhost:5000/api/cruise";

  //Get Cruise data by search criteria

  const queryParams = {
    deck: deck,
    cabin: cabin,
    departure: departure,
    arrival: arrival,
    departure_date: departure_date,
    arrival_date: arrival_date,
    // departure_date: departure_date ? new Date(departure_date).toISOString().split('T')[0] : '',
    // arrival_date: arrival_date ? new Date(arrival_date).toISOString().split('T')[0] : '',
  };

  const getCruiseBySearch = async () => {
    try {
      const data = await axios.get(apiUrl, { params: queryParams });
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.log(
          "Server responded with a non-2xx status:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log("No response received. Error:", error.request);
      } else {
        console.log("Request setup error:", error.message);
      }
    }
  };

  const handleClearClick = () => {
    setDeparture("");
    setArrival("");
    setCabin("");
    setDeck("");
    setDepartureDate("");
    setArrivalDate("");
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
        <Card>
          <Grid container className="cruise-card">
            <Grid item xs={4} sx={{ margin: "0 5px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Departure</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={departure}
                  label="Departure"
                  onChange={handleChangeDeparture}
                >
                  <MenuItem value="Colombo">Colombo</MenuItem>
                  <MenuItem value="Hambantota">Hambantota</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4} sx={{ margin: "0 0 0 5px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Arrival</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={arrival}
                  label="Arrival"
                  onChange={handleChangeArrival}
                >
                  <MenuItem value="Colombo">Colombo</MenuItem>
                  <MenuItem value="Hambantota">Hambantota</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <div style={{ width: "100%" }}>
                <DateRangePicker
                  style={{ width: "100%" }}
                  onChange={(newDates) => {
                    if (newDates && newDates.length === 2) {
                      const [start, end] = newDates;
                      setDepartureDate(start.toISOString());
                      setArrivalDate(end.toISOString());
                    }
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={3} sx={{ margin: "0px 10px 0px 10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cabin</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cabin}
                  label="Cabin"
                  onChange={handleChangeCabin}
                >
                  <MenuItem value="InsideCabin">Inside Cabin</MenuItem>
                  <MenuItem value="OceanviewCabin">Oceanview Cabin</MenuItem>
                  <MenuItem value="Suit">Suite</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Deck</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={deck}
                  label="Deck"
                  onChange={handleChangeDeck}
                >
                  <MenuItem value="D1">D1</MenuItem>
                  <MenuItem value="D2">D2</MenuItem>
                  <MenuItem value="D3">D3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3} sx={{ margin: "0 10px 0 0" }}>
              <Button fullWidth variant="contained" onClick={getCruiseBySearch}>
                Search
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="outlined" onClick={handleClearClick}>
                Clear
              </Button>
            </Grid>
          </Grid>
        </Card>

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
