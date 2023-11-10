import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Cruise from "./Pages/Cruise";
import Package from "./Pages/Package";
import Activity from "./Pages/Activity";
import CruiseBooking from "./components/CruiseBooking";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Cruise />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/package" element={<Package />} />
          <Route path="/cruise-booking" element={<CruiseBooking />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
