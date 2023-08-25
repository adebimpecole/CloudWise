import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import WeatherInfo from './components/WeatherInfo'
import "./Dashboard.sass"
import Searchbar from './components/Searchbar'
import rain from "./assets/Rain.svg"
import sun from "./assets/Sun.svg"
import wind from "./assets/Wind.svg"
import typhoon from "./assets/Typhoon.svg"
import locate from './assets/locate.svg'
import water from "./assets/water.svg"
import wind2 from "./assets/wind2.svg"
import breeze from "./assets/breeze.svg"
import axios from 'axios'
import LineChart from './components/LineChart'

const Dashboard = () => {
    const [state, setstate] = useState()

    useEffect(() => {
        // Define the API endpoint
        const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=14ad3ee8d8a54f6e954150302232108&q=Nigeria&days=2&aqi=no&alerts=no`;
    
        // Make the API request
        axios.get(apiUrl)
          .then((response) => {
            setstate(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      }, []);

  return (
    <div className='dashboard'>
      {state ? (
        <>
            <Navbar/>
                <div className='content'>
                    <Searchbar/>
                    <div className='weather_grid'>
                        <div className='weather_one'>
                            <div className='weather_two'>
                                <div className='weather_chart1'>
                                    <div className='first_span'>
                                        <span className=''><img src={locate} className='icons'/>{state.location.name}</span>
                                        <span className=''>Today</span>
                                    </div>
                                    <div className='temp_span'>
                                        <span className=''>{state.current.temp_c}°C</span>
                                        <span className=''>{state.current.condition.text}</span>
                                    </div>
                                    <div className='other_span'>
                                        <span className=''>
                                            <img src={wind2}/>
                                            <span>{state.current.pressure_mb} mb</span>
                                        </span>
                                        <span className=''>
                                            <img src={water}/>
                                            <span>{state.forecast.forecastday[0].daily_chance_of_rain}%</span>
                                        </span>
                                        <span className=''>
                                            <img src={breeze}/>
                                            <span>{state.current.wind_kph}km/h</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='weather_chart2'>
                                    <span className='temp_head'>Temperature</span>
                                    <div className='chart_div'>
                                        <LineChart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='weather_three'>
                            <img src={wind}/>
                            <div className='weather_sub'>
                                <span className='little_head'>Wind Speed</span>
                                <span className='little_texts'>
                                    <span className='text1'>{state.current.wind_kph}km/h</span>
                                    <span className='text2'>{state.current.gust_mph}mp/h</span>
                                </span>
                            </div>
                        </div>
                        <div className='weather_four'>
                            <img src={rain}/>
                            <div className='weather_sub'>
                                <span className='little_head'>Rain Chance</span>
                                <span className='little_texts'>
                                    <span className='text1'>{state.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
                                    <span className='text2'>{100-state.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
                                </span>
                            </div>
                        </div>
                        <div className='weather_five'>
                            <img src={typhoon}/>
                            <div className='weather_sub'>
                                <span className='little_head'>Pressure</span>
                                <span className='little_texts'>
                                    <span className='text1'>{state.current.pressure_in} in</span>
                                    <span className='text2'>{state.current.pressure_mb} mb</span>
                                </span>
                            </div>
                        </div>
                        <div className='weather_six'>
                            <img src={sun}/>
                            <div className='weather_sub'>
                                <span className='little_head'>UV Index</span>
                                <span className='little_texts'>
                                    <span className='text1'>2,3</span>
                                    <span className='text2'>0,3</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>  
                <WeatherInfo/>
            </>
        ) : (
            <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Dashboard
