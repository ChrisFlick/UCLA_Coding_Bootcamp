import React from "react";
import CardTitle from "../CardTitle";
import "./style.css";

function CardHeading({user}) {
  return (
    <div>
      <CardTitle
        user={user}
      />
    </div>
  );
}

export default CardHeading;
