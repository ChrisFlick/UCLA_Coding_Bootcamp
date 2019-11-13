import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card({ user, onClick }) {
  return (
    <div>
      <CardHeading
        user={user}
      />
      <CardImg
        user={user}
      />
      <CardBody
        user={user}
      />
      <CardBtn
        style={{ opacity: user.image ? 1 : 0 }}
        data-value="next"
        onClick={onClick}
      />
      <CardBtn
        style={{ opacity: user.image ? 1 : 0 }}
        data-value="back"
        onClick={onClick} 
      />
    </div>
  );
}

export default Card;
