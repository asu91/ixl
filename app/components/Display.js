import React, { Component } from "react";
import { lettersToNumbers } from "./alphabet.enum";

export const Display = ({word, number}) => {
  const letters = word.split("");
  let formattedNum = number;
  while(formattedNum > letters.length - 1) {
    formattedNum = formattedNum - letters.length
  }
  return (
    <div>
      {letters.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              display: "inline-block",
              padding: "10px",
              backgroundColor: formattedNum === index ? "yellow" : "white"
            }}
          >
            <div>{value}</div>
            <div>{lettersToNumbers[value]}</div>
          </div>
        )
      })}
    </div>
  );
}

const styles = {
  row: {
    display: "inline-block",
    padding: "10px"
  }
}

export default Display;
