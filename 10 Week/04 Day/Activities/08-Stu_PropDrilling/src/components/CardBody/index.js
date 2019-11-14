import React from "react";

function CardBody({user}) {
  return (
    <div>
      <h4>
      Favorite language: {user.language}
      </h4>
      <h4>
      Email: {user.email}
      </h4>
    </div>
  );
}

export default CardBody;
