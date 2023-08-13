import { useState, useEffect } from "react";
import { API_KEY, WEATHER_API_URL } from "./constants";
import Weather from "./Weather";
import SkyImg from "../assets/sky.png";

const Body = () => {
  const [cityName, setCityName] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData(city) {
    const api_full = WEATHER_API_URL + city;
    const data = await fetch(api_full);
    const json = await data.json();
    setWeatherData(json);
  }

  return (
    <div
      className="flex justify-center h-screen bg-cover"
      style={{ backgroundImage: `url(${SkyImg})` }}
    >
      <div className="bg-blue-950 rounded-sm shadow-md m-1 p-6 text-white w-2/5">
        <div className="flex justify-center mb-10">
          <input
            className="text-black m-2 h-8 w-2/4 rounded-sm"
            type="text"
            placeholder="City name"
            onChange={(e) => {
              setCityName(e.target.value);
              //   console.log(cityName);
            }}
          />
          <button
            className=" m-2 h-8 w-20 rounded-sm bg-green-300"
            onClick={() => {
              fetchData(cityName);
            }}
          >
            Search
          </button>
        </div>

        {weatherData == null ? null : <Weather data={weatherData} />}
      </div>
    </div>
  );
};

export default Body;
