import React from "react";
import { alphabet, lettersToNumbers, numbersToLetters} from "./alphabet.enum";

const SourceTextInput = ({ keyword, number, onClick }) => {
  const styles = {
    row: {
      display: "inline-block",
      padding: "5px"
    },
    blocks: {
      height: "25px",
      width: "25px",
      border: "solid",
      borderWidth: "1px",
      textAlign: "center"
    }
  }

  let keywordLetterValue = lettersToNumbers[keyword[number]];

  return (
    <div>
      <h3>Source Text</h3>
      {alphabet.map((letter, index) => {
        const valueOfLetter = lettersToNumbers[letter];
        let transformedNumber = valueOfLetter + keywordLetterValue;
        if (transformedNumber > 25) {
          transformedNumber -= 26;
        }
        const transformedLetter = numbersToLetters[transformedNumber];
        return (
          <div key={index} style={styles.row}>
            <div style={styles.blocks}>
              <button
                type="button"
                onClick={() => onClick(letter, transformedLetter)}
                >
                  {letter}
                </button>
            </div>
            <div style={styles.blocks}>{transformedLetter}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SourceTextInput;
