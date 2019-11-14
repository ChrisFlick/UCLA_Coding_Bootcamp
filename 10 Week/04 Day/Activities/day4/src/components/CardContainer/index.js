import React, {useContext} from "react";
import Card from "../Card";
import "./style.css";
import Context from "../../utils/Context"

function CardContainer({ handleBtnClick }) {
  const {firstName, lastName, image, language, email} = useContext(Context)

  return (
    <div className="jumbotron card-container">
      <Card  handleBtnClick={handleBtnClick} />
    </div>
  );
}

export default CardContainer;
