import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  //A function to do the get request and set the state from the hard code data
  const loadCity = (city) => {
    const params = new URLSearchParams({ cityName: city });
    fetch(`http://localhost:8080/api/weather?${params}`)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result)
        setCity(city);
        setResult(result);
      });
  }

 const handleSubmit = (city) =>{
  // e.preventDefault();
  loadCity(city);
 }


  return (
    <div className="App">
      <img id="weather-app-pic" src='https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Around%20the%20World'/>
      <WeatherForm city={city} handleSubmit={handleSubmit}/>
      {!result ? <p>Press Submit to see the weather.</p> : <WeatherCard data={result} /> }
    </div>
  );
}

export default App;
