import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const ProgressBar = ({ value }) => {
  // Ensure the value is between 0 and 100
  const progressValue = Math.min(Math.max(value, 0), 100);

  // Data for the progress bar
  const data = [{ x: 1, y: progressValue }];

  return (
    <VictoryChart
      height={40}
      width={200}
      domainPadding={{ x: 5 }}
      theme={VictoryTheme.material}
    >
      <VictoryBar
        data={data}
        x="x"
        y="y"
        style={{
          data: {
            fill: "blue", // Change the color as desired
          },
        }}
      />
    </VictoryChart>
  );
};

export default ProgressBar;
