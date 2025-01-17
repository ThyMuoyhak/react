import React from "react";
import './Hero.css'; // Make sure to import your styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 style={{ fontSize: 50, fontFamily: '"Koulen", serif' }}>
          <span style={{ color: "rgb(31, 245, 31)" }}>រៀន</span>
          <span style={{ color: "aqua" }}>កូដ</span>ជាភាសា
          <span style={{ color: "red" }}>ខ្មែរ</span>
        </h1>
        <h1 style={{ fontSize: 40, fontFamily: '"Koulen", serif' }}>
          <span style={{ color: "aqua" }}>Code</span>
          <span style={{ color: "red" }}>Khmer</span>
          <span style={{ color: "yellow" }}>Learning</span>
        </h1>
        <p style={{ fontSize: 20, fontFamily: '"Koulen", serif' }}>
          ចាប់ផ្តើមដំណើររបស់អ្នកក្នុងការសរសេរកូដជាមួយមេរៀនដែលអានយ៉ាងងាយ!
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
