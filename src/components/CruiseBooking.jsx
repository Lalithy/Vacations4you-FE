import React, { useEffect, useState } from "react";
import "../style/cruiseBooking.css";
import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import moment from "moment";

// function ccyFormat(num) {
//   return `$${num.toFixed(2)}`;
// }

// function createRow(
//   provider,
//   cabin,
//   deck,
//   departure,
//   arrival,
//   duration,
//   arrivalDate,
//   departureDate,
//   price
// ) {
//   return {
//     provider,
//     cabin,
//     deck,
//     departure,
//     arrival,
//     duration,
//     arrivalDate,
//     departureDate,
//     price: parseFloat(price),
//   };
// }

const ccyFormat = (num) => `${num.toFixed(2)}`;

// function createRow(provider, cabin, deck, departure, arrival, duration, arrivalDate, departureDate, price) {
//   return { provider, cabin, deck, departure, arrival, duration, arrivalDate, departureDate, price };
// }

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}



// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow(
//     "Carnival Cruise Line",
//     "Suit",
//     "D2",
//     "Colombo",
//     "Germany",
//     "25",
//     "2023-11-06",
//     "2023-11-30",
//     4500
//   ),
//   createRow(
//     "Carnival Cruise Line",
//     "Suit",
//     "D2",
//     "Colombo",
//     "UK",
//     "30",
//     "2023-11-05",
//     "2023-11-30",
//     6500
//   ),
// ];

// const invoiceSubtotal = subtotal(rows);

export default function CruiseBooking() {
  const storedCartData = JSON.parse(localStorage.getItem("shopping-cart")) || [];
  const [cartData, setCartData] = useState(storedCartData);


  useEffect(() => {
    const updatedCartData = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    setCartData(updatedCartData);
  }, []);

  const invoiceSubtotal = subtotal(cartData);

  console.log('cartData>>>>',cartData)

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    setIsValid(emailPattern.test(inputEmail));
  };

  const handlePhoneChange = (event) => {
    const inputPhone = event.target.value;
    setPhone(inputPhone);

    const phonePattern = /^\d{10}$/;

    setIsValid(phonePattern.test(inputPhone));
  };

  const [meal, setMeal] = React.useState("");

  const handleChangeMeal = (event) => {
    setMeal(event.target.value);
  };

  return (
    <div className="cruiseBookingCard">
      <Card />

      <Grid container>
        <Grid item sm={12} style={{ marginLeft: 50, marginTop: 20 }}>
          <h4>Checkout</h4>
        </Grid>

        <Grid item sm={5} style={{ marginLeft: 100, marginTop: 20 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
        </Grid>

        <Grid item sm={5} style={{ marginRight: 100, marginTop: 20, marginLeft: 4 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
        </Grid>

        <Grid item sm={5} style={{ marginLeft: 100, marginTop: 20 }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            error={!isValid}
            helperText={!isValid ? "Invalid email address" : ""}
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>

        
        <Grid item sm={5} style={{ marginRight: 100, marginTop: 20, marginLeft: 4 }}>
            <TextField
            label="Phone Number"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            variant="outlined"
            fullWidth
            error={!isValid}
            helperText={!isValid ? "Enter a valid 10-digit phone number" : ""}
            value={phone}
            onChange={handlePhoneChange}
          />
        </Grid>

        <Grid item sm={5} style={{ marginLeft: 100, marginTop: 20 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Meal Preferences
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={meal}
              label="Meal Preferences"
              onChange={handleChangeMeal}
            >
              <MenuItem value="RoomService">Room Service</MenuItem>
              <MenuItem value="Buffet">Buffet</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={12} style={{ margin: "30px 100px 0 100px" }}>
          <div style={{ overflowY: "auto", maxHeight: "400px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>Provider</TableCell>
                    <TableCell align="right">Cabin</TableCell>
                    <TableCell align="right">Deck</TableCell>
                    <TableCell align="right">Departure</TableCell>
                    <TableCell align="right">Arrival</TableCell>
                    <TableCell align="right">Duration</TableCell>
                    <TableCell align="right">Arrival Date</TableCell>
                    <TableCell align="right">Departure Date</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="right">{row.cabin}</TableCell>
                      <TableCell align="right">{row.deck}</TableCell>
                      <TableCell align="right">{row.departure}</TableCell>
                      <TableCell align="right">{row.arrival}</TableCell>
                      <TableCell align="right">{row.duration}</TableCell>
                      {/* <TableCell align="right">{row.arrival_date}</TableCell> */}
                      {/* <TableCell align="right">{row.departure_date}</TableCell> */}

                      <TableCell align="right"> {moment(row.arrival_date).format("YYYY-MM-DD")}</TableCell>
                      <TableCell align="right">{moment(row.departure_date).format("YYYY-MM-DD")}</TableCell>
                     
                     
                      <TableCell align="right">
                        {ccyFormat(row.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={9} />
                    <TableCell align="right" colSpan={7}>
                      Total
                    </TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceSubtotal)}
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 5, marginBottom: 5 }}>
          <Grid item sm={3}>
            <Button fullWidth variant="contained">
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Card />
    </div>
  );
}
