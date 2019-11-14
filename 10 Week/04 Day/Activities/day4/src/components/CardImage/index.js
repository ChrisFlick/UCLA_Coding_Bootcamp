import React, { useContext } from "react";
import Context from "../../utils/Context"

function CardImg() {
  const { image } = useContext(Context)
  return (
    <div>
      <img className="card-img" src={image} alt="user thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;