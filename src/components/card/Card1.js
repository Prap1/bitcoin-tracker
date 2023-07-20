import React from "react";
import "./Card.css";
import bitcoin from "../../assets/bitcoin.png";
import { IoIosArrowDown } from "react-icons/io";

const Card1 = () => {
  return (
    <div className="card">
      <div className="bit">
        <ul>
          <li>Lower</li>
        </ul>
        <ul>
          <li>Hiher</li>
        </ul>
      </div>
      <div className="card-content">
        <div className="number">
          <h2>7654532</h2>
          <p>77</p>
        </div>
        
      </div>
    </div>
  );
};

export default Card1;
