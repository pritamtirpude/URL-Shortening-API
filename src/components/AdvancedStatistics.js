import React from "react";
import IconBrandRecognition from "../assets/icon-brand-recognition.svg";
import IconDetailedRecords from "../assets/icon-detailed-records.svg";
import IconFullyCustomizable from "../assets/icon-fully-customizable.svg";

const AdvancedStatistics = () => {
  return (
    <section className="statistics-container" id="statistics">
      <div className="statistics-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="statistics-features">
        <div className="feature">
          <div className="icon-container">
            <img src={IconBrandRecognition} alt="icon" />
          </div>
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="feature two">
          <div className="icon-container">
            <img src={IconDetailedRecords} alt="icon" />
          </div>
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="feature three">
          <div className="icon-container">
            <img src={IconFullyCustomizable} alt="icon" />
          </div>
          <h4>Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedStatistics;
