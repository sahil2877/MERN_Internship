function WeatherCard({ weather }) {

   return (

      <div className="weather-card">

         <h2>{weather.name}</h2>

         <h3>{weather.main.temp} °C</h3>

         <p>{weather.weather[0].main}</p>

      </div>

   );
}

export default WeatherCard;