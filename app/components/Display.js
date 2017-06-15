import React, { Component } from "react";
import alphabet from "./alphabet.enum";

export default class Display extends Component {
  render() {
    const { word } = this.props;
    const split = word.split("");
    console.log("split", split)
    return (
      <div>
        {split.map((value, index) => {
          return (
            <div key={index} style={styles.row}>
              <div>{value}</div>
              <div>{alphabet[value]}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

const styles = {
  row: {
    display: "inline-block",
    padding: "10px"
  }
}
