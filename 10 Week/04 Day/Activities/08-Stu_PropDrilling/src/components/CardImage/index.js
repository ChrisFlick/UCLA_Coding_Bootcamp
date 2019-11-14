import React from "react";

function CardImg({user}) {
  return (
    <div>
      <img className="card-img" src={user.image} alt="user thumbnail" />
      {!user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;