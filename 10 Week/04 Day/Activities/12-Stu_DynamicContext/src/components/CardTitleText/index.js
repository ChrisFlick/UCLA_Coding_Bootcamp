import React, { useContext } from "react";
import Context from "../../utils/Context"

function CardTitleText() {
  const {firstname, lastname } = useContext(Context)
  return <h2>{firstname} {lastname}</h2>;
}

export default CardTitleText;
