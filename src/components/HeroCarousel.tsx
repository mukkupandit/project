import React from 'react';
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";

export default function HeroCarousel() {
  return (
    <div className="flex flex-col items-center">
      {/* First Image */}
      <img
        src={bg}
        alt="First Image"
        style={{
          objectFit: "cover",
          height: "27rem",
          width: "100%",
        }}
      />



      {/* Second Image */}
      <img
        src={bg2}
        alt="Second Image"
        style={{
          objectFit: "contain",
          height: "27rem",
          width: "100%",
          marginTop:"-8rem",
          marginBottom:"-8rem"
        }}
      />
    </div>
  );
}
