import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({user, onClick}) {
  return (
    <div className="jumbotron card-container">
      <Card 
        user={user}
        onClick={onClick}
      />
    </div>
  );
}

export default CardContainer;
