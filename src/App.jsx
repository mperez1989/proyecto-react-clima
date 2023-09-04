
import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios"
import WeatherCard from './components/WeatherCard';

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  useEffect(()=>{
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success);
  },[])

  useEffect(() => {
    if(coords){
      const apiKey = `54e77e3a5ae978643c8aa7193e683d68`
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [coords])
  const bgStyle = {
    backgroundImage: `url(/imagen${4}.jpg)`
  }
  
  return (
    <div style={bgStyle} className='conteiner'>
      <WeatherCard weather = {weather}></WeatherCard>
    </div>
  )
}

export default App
