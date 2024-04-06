import React, { useEffect, useState } from 'react';
import './widget.css';

// Sample Components
const Component1 = () => (
  <div>
    <img src="../images/GithubRepo.png" alt="Component 1" />
    <div className="component-title">Component 1</div>
  </div>
);
const Component2 = () => (
  <div>
    <img src="component2.png" alt="Component 2" />
    <div className="component-title">Component 2</div>
  </div>
);
const Component3 = () => (
  <div>
    <img src="component3.png" alt="Component 3" />
    <div className="component-title">Component 3</div>
  </div>
);

function Widget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <Component1 />,
    <Component2 />,
    <Component3 />,
    // Add more components as needed
  ];
  const progress = (currentIndex + 1) / components.length * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000); // Change the interval time as needed (5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, [components.length]);

  return (
    <div className="widget-container">
      {components[currentIndex]}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Widget;
