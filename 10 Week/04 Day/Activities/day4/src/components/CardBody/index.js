import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import LanguageContext from "../../utils/languageContext";

function CardBody() {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h4>
        Favorite language: {language}
      </h4>
      <h4>
          Email: {user.email}
      </h4>
    </div>
  );
}

export default CardBody;
