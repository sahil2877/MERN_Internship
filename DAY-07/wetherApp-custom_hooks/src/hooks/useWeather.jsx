import { useState } from "react";

function useWeather() {

   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   const fetchWeather = async (city) => {

      try {

         setLoading(true);
         setError("");

         const API_KEY = "533189d4d4a39eeb23059b81c35ee6b5";

         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
         );

         const data = await response.json();

         if (data.cod === "404") {
            setError("City not found");
            setWeather(null);
         } else {
            setWeather(data);
         }

      } catch (err) {

         setError("Something went wrong");

      } finally {

         setLoading(false);

      }

   };

   return {
      weather,
      loading,
      error,
      fetchWeather
   };
}

export default useWeather;
