import React from "react";
import Illustration from "../assets/illustration-working.svg";

const IntroSection = () => {
  return (
    <section className="intro-container">
      <div className="intro-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="intro-illustration">
        <img src={Illustration} alt="illustration" />
      </div>
    </section>
  );
};

export default IntroSection;
