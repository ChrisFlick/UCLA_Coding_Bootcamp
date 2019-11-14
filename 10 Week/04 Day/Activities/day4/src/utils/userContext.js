import React from "react";

const UserContext = React.createContext({
  firstname: "",
  lastname: "",
  email: "",
  image: "",
  capitalizeFirstLetter: () => {},
  handleBtnClick: () => {}
});

export default UserContext;
