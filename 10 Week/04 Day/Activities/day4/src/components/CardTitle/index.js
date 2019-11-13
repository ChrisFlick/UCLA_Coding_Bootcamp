import React from "react";
import CardTitleText from "../CardTitleText";
import "./style.css";


function CardTitle({user}) {
  return (
    <div className="blue text-center">
      <CardTitleText
        user={user}
      />
    </div>
  );
}

export default CardTitle;
