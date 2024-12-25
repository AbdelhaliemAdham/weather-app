import "./App.css";
import Header from "./components/header";
import Body from "./components/Body";
import { useState } from "react";
import SearchInput from "./components/SearchInput";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [errors, setErrors] = useState(null);

  const fetchWeather = async (searchedLocation) => {
    if (searchedLocation) {
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };
      const url = `https://api.tomorrow.io/v4/weather/realtime?location=${searchedLocation}&apikey=Ank1XA4BmlK64GGbrb9rXA3XWbirYfx4`;
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setErrors(error);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchInput onClick={fetchWeather} />
      <Body weatherData={weatherData} error={errors} />
    </div>
  );
}

export default App;
