import React, { useState } from 'react'

const WeatherCard = ({weather}) => {

  const [temperatura, setTemperatura] = useState(true)

  let temp = 0;

  if(temperatura) {
    temp = Math.floor(weather?.main.temp -273.15);
  } else {
    temp = Math.floor((weather?.main.temp - 273.15)*9/5+32);
  }
  
  const handleTemp = ()=>{
    setTemperatura(!temperatura)
  }

  return (
    <article className='card-conteiner'>
      <h1>weather App</h1>
      <h2 className='country-name'>{weather?.name} , {weather?.sys.country}</h2>
      <div className='main-conteiner'>
        <div className='image-conteiner'>
          <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
        <section className='section-conteiner'>
          <h2>"{weather?.weather[0].description}"</h2>
          <ul className='list-conteiner'>
            <li><span>Wind Speed</span> <span className='item1'>{weather?.wind.speed} m/s</span></li>
            <li><span>Clouds</span> <span className='item2'>{weather?.clouds.all} %</span></li>
            <li><span>Pressure</span> <span className='item3'>{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
        <h2 className='temperature'>{temp} {temperatura ? "°C" : "°F"}</h2>
        <button className='btn' onClick={handleTemp}>{temperatura ? "Change to °F" : "Change to °C"}</button>
    </article>
  )
}

export default WeatherCard