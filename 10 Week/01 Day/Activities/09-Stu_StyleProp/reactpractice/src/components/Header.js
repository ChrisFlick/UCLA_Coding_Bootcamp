import React from "react";
import "../styles/Header.css";

const styles = {
  header: {
    background: "red"
  },
}

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
