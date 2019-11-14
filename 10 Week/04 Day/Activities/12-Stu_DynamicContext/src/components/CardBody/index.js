import React, { useContext } from "react";
import Context from "../../utils/Context"

function CardBody() {
  const {language, email} = useContext(Context)
  return (
    <div>
      <h4>
      Favorite language: {language}
      </h4>
      <h4>
      Email: {email}
      </h4>
    </div>
  );
}

export default CardBody;
