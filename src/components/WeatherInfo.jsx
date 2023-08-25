import React, {useState, useEffect} from 'react'
import "./WeatherInfo.css"
import cloud from "../assets/clouds.svg"
import sun from "../assets/Sunrise.svg"
import sunset from "../assets/Sunset.svg"
import axios from 'axios'
import ProgressBar from './Progressbar'

const WeatherInfo = () => {
  const [future, setfuture] = useState(null)
    const apikey = "14ad3ee8d8a54f6e954150302232108"

    useEffect(() => {
        // Define the API endpoint
        const futureURl = 'http://api.weatherapi.com/v1/forecast.json?key=14ad3ee8d8a54f6e954150302232108&q=Nigeria&days=2&aqi=no&alerts=no';
    
        // Make the API request
        axios.get(futureURl)
          .then((response) => {
            setfuture(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      }, []);
  return (
    <>
      {future ? (
        <div className='weather_info'>
        <div className='div1'>
              <span className='one_head'>Tomorrow</span>
              <span className='one_texts'>
                  <span className='onetext1'>{future.location.country}</span>
                  <span className='onetext2'>{future.location.name}</span>
              </span>
        </div>
        <div className='div2'>
              <img src={future.forecast.forecastday[1].day.condition.icon} className='clouds'/>
              <span className='two_texts'>
                  <span className='twotext1'>{future.forecast.forecastday[1].day.avgtemp_c}°C</span>
                  <span className='twotext2'>{future.forecast.forecastday[1].day.condition.text}</span>
              </span>
        </div>
        <hr/>
        <div className='div3'>
          <span className='three_head'>Chance of rain</span>
          <div className='rain_div'>
            <ProgressBar/>
          </div>
        </div>
        <div className='div4'>
          <div className='div4_head'>
              <span className='three_head'>Sunrise & Sunset</span>
              <span className='other_head'>{future.location.name}</span>
          </div>
          <div className='divone active'>
              <img src={sun}/>
              <span className='four_texts'>
                  <span className='fourtext1'>{future.forecast.forecastday[1].astro.sunrise}</span>
                  <span className='fourtext2'>Sunrise</span>
              </span>
              <span className='four_head'>4 hours ago</span>
          </div>
          <div className='divone'>
              <img src={sunset}/>
              <span className='four_texts'>
                  <span className='fourtext1'>{future.forecast.forecastday[1].astro.sunset}</span>
                  <span className='fourtext2'>Sunset</span>
              </span>
              <span className='four_head'>4 hours ago</span>
          </div>
        </div>
      </div>
      ) : (<div>Loading weather report ...</div>)}
    </>
  )
}

export default WeatherInfo
