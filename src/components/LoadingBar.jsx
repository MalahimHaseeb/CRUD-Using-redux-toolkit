// LoadingBar.js
import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useLocation } from 'react-router-dom';

const ProgressBar = ({ progress }) => {
  return (
    <LoadingBar
      color="#A9A9A9" // Set the color to green
      progress={progress}
      onLoaderFinished={() => {}} // You can add a callback if needed
    />
  );
};

const LoadingBarComponent = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const simulateProgress = () => {
      setProgress(10);

      // Simulate additional progress at 50%
      setTimeout(() => {
        setProgress(50);
      }, 1000);

      // Simulate additional progress at 100%
      setTimeout(() => {
        setProgress(100);
      }, 2000);
    };

    simulateProgress();
  }, [location.pathname]); // Update progress when route changes

  return <ProgressBar progress={progress} />;
};

export default LoadingBarComponent;
