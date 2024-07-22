import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './Weather-card.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WeatherCard() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({
    name: "Default City",
    main: {
      temp: 293.15, // Default temperature in Kelvin (20°C)
    },
  });

  // Function to fetch weather details
  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios.get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // Handle input change
  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  useEffect(() => {
    // Fetch weather data for a default city when the component mounts
    getWeatherDetails("New York"); // You can change "New York" to any default city
  }, []);

  return (
    <div className="col-md-12 weather">
      <Navbar />
      <div className="weatherBg mgnb">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
            placeholder="Enter city name"
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weatherIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            alt="Weather Icon"
          />
          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">
            {((data?.main?.temp) - 273.15).toFixed(2)}°C
          </h6>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeatherCard;