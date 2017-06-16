import React from "react";
import { lettersToNumbers } from "./alphabet.enum";

export const Display = ({keyword, number}) => {
  const letters = keyword.split("");
  const styles = {
    blocks: {
      height: "30px",
      width: "30px",
      border: "solid",
      borderWidth: "1px",
      textAlign: "center"
    }
  }

  return (
    <div>
      {letters.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: number === index ? "yellow" : "white"
            }}
          >
            <div style={styles.blocks}>{value}</div>
            <div style={styles.blocks}>{lettersToNumbers[value]}</div>
          </div>
        )
      })}
    </div>
  );
}

export default Display;
