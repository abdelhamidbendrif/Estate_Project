import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./aboutPage.scss";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="imgContainer">
        <img src="/bg-about.png" alt="" />
      </div>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          {/* Additional content */}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
