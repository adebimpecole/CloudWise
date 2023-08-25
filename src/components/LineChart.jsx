import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";
import axios from 'axios'

const LineChart = () => {
  const [data, setData] = useState({});
  const customXCoordinates = ["Morning", "Afternoon", "Evening", "Night"];

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=14ad3ee8d8a54f6e954150302232108&q=Nigeria&days=2&aqi=no&alerts=no`;

    // Make the API request
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  if (!data || !data.forecast || !data.forecast.forecastday || !data.forecast.forecastday[0]) {
    return <div>Loading...</div>;
  }

  const numberOfPointsToDisplay = 4;

  const filteredData = data.forecast.forecastday[0].hour.filter((dataPoint, index) => index % numberOfPointsToDisplay === 0);

  return (
    <>
      <VictoryChart>
        <VictoryAxis
          tickValues={customXCoordinates}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[]}
        />
        <VictoryLine
          data={filteredData.map((dataPoint, index) => ({
            x: customXCoordinates[index],
            y: dataPoint.temp_c,
          }))}
          style={{
            data: { stroke: "blue" },
          }}
          interpolation="natural" // Use "cardinal" interpolation for a curvy line
        />
      </VictoryChart>
    </>
  );
}

export default LineChart;
