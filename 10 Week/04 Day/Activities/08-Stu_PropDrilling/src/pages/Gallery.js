import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

let userIndex = 0;

function Gallery() {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  // Capitalize the first letter of a given string
  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Ensure that the user index stays within our range of users
  function nextUser() {
    if (userIndex < users.length - 1) {
      userIndex++
      setUser(users[userIndex])
    }
    
  }

  // Ensure that the user index stays within our range of users
  function previousUser() {
    if (userIndex > 0) {

      userIndex--;
      setUser(users[userIndex])
    }

  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      nextUser();
    } else if (btnName === "back") {
      previousUser();
    }
  }

  function loadUsers() {
    API.getLanguagesList()
      .then(languages => {
        API.getUsersByLanguage(languages[0]).then((users) => {
          setUsers(users);
          setUser(users[0]);
        });
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Welcome to LinkedUp</h1>
      <h3 className="text-center">Click on the arrows to browse users</h3>
      <Row>
        <CardContainer
          user={user}
          onClick = {handleBtnClick}
        />
      </Row>
    </div>
  );
}

export default Gallery;
