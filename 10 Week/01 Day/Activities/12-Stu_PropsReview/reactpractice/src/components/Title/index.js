import React from "react";
import "./style.css";

const styles = {
  title: {
    background: "red",
    color: "black"
  }
}

function Title(props) {
  return <h1 className="title" style={styles.title}>{props.children}</h1>;
}

export default Title;
