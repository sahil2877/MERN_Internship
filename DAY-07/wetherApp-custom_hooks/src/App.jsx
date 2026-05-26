import "./index.css";

import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";

import useWeather from "./hooks/useWeather";

function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <div className="container">
      <h1>Weather App</h1>

      <WeatherForm fetchWeather={fetchWeather} />

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}
      
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
