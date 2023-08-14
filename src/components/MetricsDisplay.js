// MetricsDisplay.js
import React from 'react';

const MetricsDisplay = ({ metrics }) => {
    console.log("mmmm",metrics)
  return (
    <div className="border p-4">
      <h2 className="text-lg font-semibold mb-2">Metrics</h2>
      <p>Accuracy: {metrics.accuracy}</p>
      <p>Precision: {metrics.precision}</p>
      <p>Recall: {metrics.recall}</p>
    </div>
  );
};

export default MetricsDisplay;
