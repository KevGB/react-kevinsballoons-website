import React, { useState } from 'react';

const DivCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const renderDivs = () => {
    const divs = [];
    const totalDivs = 7;

    for (let i = 0; i < totalDivs; i++) {
      divs.push(
        <div
          key={i}
          style={{ display: i === activeIndex ? 'block' : 'none' }}
        >
          Div {i + 1}
        </div>
      );
    }

    return divs;
  };

  const renderDotIndicators = () => {
    const dotIndicators = [];
    const totalDivs = 7;

    for (let i = 0; i < totalDivs; i++) {
      dotIndicators.push(
        <span
          key={i}
          className={i === activeIndex ? 'active' : ''}
          onClick={() => setActiveIndex(i)}
        ></span>
      );
    }

    return dotIndicators;
  };

  return (
    <div>
      {renderDivs()}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <div className="dot-indicators">{renderDotIndicators()}</div>
    </div>
  );
};

export default DivCarousel;
