import React, { useEffect, useState } from 'react'
import './Weather.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Weather() {
  const nav=useNavigate()

  const api = {
    base:"https://api.openweathermap.org/data/2.5/",
    foreCast:"https://api.openweathermap.org/data/2.5/forecast",
    API_key:'0fb08f9e4f1600bb0af252fa88c0524f',
    current_location:'https://api.openweathermap.org/data/2.5/weather'

  }
  const [search, setsearch] = useState('')
  const [data, setdata] = useState({});
  const [lat, setlat] = useState('')
  const [lon, setlon] = useState('')
  const [foreCast, setforeCast] = useState([])
  const [userLocation, setUserLocation] = useState({});

  const date= new Date()
  const year=date.getFullYear();
  const day=date.getDay()
  const month=date.getMonth()
  // console.log(date.getFullYear());


  const handleClick= async()=>{
    if(search===''){
      alert('Search a city name')
    }
     else{
      await fetch(`${api.base}weather?q=${search}&units=metric&&appid=${api.API_key}`).then(res=>res.json()).then((result)=>{
        console.log(result);
        setdata(result)
        setlat(result?.coord?.lat)
        setlon(result?.coord?.lon)
      })

      await fiveDayForeCast()
      setsearch('')
    }
  }


  const fiveDayForeCast= async()=>{
    const response = await axios.get(`${api.foreCast}?q=${search}&units=metric&appid=${api.API_key}`);
    const limit_Data=response.data.list.slice(0,5)
    setforeCast(limit_Data)
    {
      limit_Data.map((e)=>
      console.log(e.dt_txt)
    )}
  }

  const graphPage=()=>{
    if(search){
      nav(`/graph/${search}`)
    } else{
      alert('Search a city name')
    }
  }



  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <div className='card-container'>
        <div className="weather-input">
          <h3>Enter a city Name</h3>
          <input value={search} onChange={(e)=>setsearch(e.target.value.trim())} type="text" placeholder='E.g., New York, London , Mumbai' />
          <button onClick={handleClick} className='search-btn'>
            Search
          </button>
          <div className="separator"></div> 
             <button onClick={graphPage} className="location-btn">
              Graph Chart
            </button>
          </div>
          <div className="Weather-data">
            <div className="current-weather">
              <div className="details">
                <h2 className='location'>{data.name}<br/>({`${day}-${month}-${year}`})</h2>
                <h4 className='temp'>Temperature:{data?.main?.temp}°</h4>
                <h4 className='wind'>Wind: {data?.wind?.speed} M/S</h4>
                <h4 className='humidity'>Condition: {data.weather && data.weather[0].main}</h4>
              </div>
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/10d@4x.png`} alt='icon'/>
                <h4 className='condition'> {data.weather && data.weather[0].description}</h4>
              </div>
            </div>
            <div className="days-forecast">
              <h2>Forecast</h2>
              <ul className='weather-cards'>
                {
                  foreCast.map((e)=>
                <li className="card">
                  <h3>({e.dt_txt})</h3>
                  <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                  <h4>Temperature:{e?.main?.temp}°</h4>
                  <h4>Wind: {e.wind.speed} M/S</h4>
                  <h4>Condition:{e.weather && data.weather[0].main} </h4>
                </li>
                )}
               
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Weather