// ChartDisplay.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartDisplay = ({ predictions, actualResults }) => {
    // console.log("cartdis",predictions,actualResults)
  const chartData = {
    labels: predictions.map((_, index) => index.toString()),
    datasets: [
      {
        label: 'Predictions',
        data: predictions,
        borderColor: 'blue',
      },
      {
        label: 'Actual Results',
        data: actualResults,
        borderColor: 'green',
      },
    ],
  };

  return (
    <div className="border p-4">
      <h2 className="text-lg font-semibold mb-2">Prediction Chart</h2>
      {predictions.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default ChartDisplay;