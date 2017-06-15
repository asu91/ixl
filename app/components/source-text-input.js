import React, { Component } from "react";
import { alphabet, lettersToNumbers, numbersToLetters} from "./alphabet.enum";

export default class SourceTextInput extends Component {
  constructor() {
    super()
  }
  render() {
    const { number }
    return (
      <div>
        <p>Source Text</p>
        {alphabet.map((letters, index) => {
          return (
            <div key={index}>
              <div>{letters}</div>
              <div>{lettersToNumbers[letters]}</div>
            </div>
          )
        })}
      </div>
    );
  }
}
