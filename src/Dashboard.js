import React, { useState, useEffect } from 'react';
import { fetchMetrics, fetchPredictions, apiConstants } from './utils/api';
import MetricsDisplay from './components/MetricsDisplay';
import ChartDisplay from './components/ChartDisplay';
import ControlButtons from './components/ControlButtons';
import "./css/Dashboard.css"

const Dashboard = () => {
  const [metrics, setMetrics] = useState(apiConstants);
  const [predictions, setPredictions] = useState([]);
  const [actualResults, setActualResults] = useState([]);
  const [modelStatus, setModelStatus] = useState('stopped');
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [loadingPredictions, setLoadingPredictions] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingMetrics(true);
        const metricsResponse = await fetchMetrics();
        console.log("metricsResponse", metricsResponse); // Check API response here
        if (metricsResponse !== null) {
          setMetrics(metricsResponse);
        }
        setLoadingMetrics(false);

        setLoadingPredictions(true);
        const predictionsResponse = await fetchPredictions();
        console.log("predictionsResponse", predictionsResponse); // Check API response here
        if (predictionsResponse !== null) {
          setPredictions(predictionsResponse.predictions);
          setActualResults(predictionsResponse.actualResults);
        }
        setLoadingPredictions(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingMetrics(false);
        setLoadingPredictions(false);
      }
    };

    fetchData();
  }, []);

  const handleStartModel = () => {
    setModelStatus('running');
  };

  const handleStopModel = () => {
    setModelStatus('stopped');
  };

  const handleConfigureModel = () => {
    // Logic to configure the model
    // For example, open a modal
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">AI Product Dashboard</h1>
      <MetricsDisplay metrics={metrics} />
      {loadingPredictions || loadingMetrics ? (
        <p>Loading data...</p>
      ) : (
        <>
          <ChartDisplay predictions={predictions} actualResults={actualResults} />
          <ControlButtons
            onStart={handleStartModel}
            onStop={handleStopModel}
            onConfigure={handleConfigureModel}
            modelStatus={modelStatus}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
