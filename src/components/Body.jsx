import React from "react";
import temperatureIcon from "../assets/temp.png";
import humidity from "../assets/humidity.png";
import windSpeed from "../assets/wind.png";
import clear from "../assets/clear.png";

export default function Body({ weatherData, error }) {
  return (
    <>
      {weatherData ? (
        <div className="body-data">
          <h2 id="time">Time : {weatherData.data.time}</h2>
          <h2 id="country">{weatherData.location.name}</h2>
          <div className="weather-data">
            <img src={temperatureIcon} />
            <h2>Temperature : </h2>
            <h2>{weatherData.data.values.temperature ?? ""} °C</h2>
            <div className="weather-data">
              <img src={clear} alt="rain" />
              <h2>visibility :</h2>
              <h2>{weatherData.data.values.visibility ?? ""} km</h2>
            </div>
          </div>
          <div className="weather-data">
            <img src={humidity} alt="humidity" />
            <h2>humidity : </h2>
            <h2>{weatherData.data.values.humidity ?? ""} %</h2>
            <div className="weather-data">
              <img src={windSpeed} alt="humidity" />
              <h2>Wind Speed :</h2>
              <h2>{weatherData.data.values.windSpeed ?? ""} Km/hr</h2>
            </div>
          </div>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
}
