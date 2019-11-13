import React from "react";

function CardTitleText({user}) {
return <h2>{user.firstname + " " + user.lastname}</h2>;
}

export default CardTitleText;
