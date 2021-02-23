import React from "react";
import Data from "./Data";

const notes = ["c", "d", "e", "f", "g", "a", "b"];
const blackkeys = ["cd", "ed", "fg", "ga", "ab"];

var thisthing = 0;

function Checker(array, index, answer) {
  if (answer === array[index]) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
}

function godPleaseWork(count) {
  if (count > 2) {
    return 54 * (count + 1) - 15;
  }
  return 54 * count - 15;
}

function setPianoClick(item) {
  Data.pianoClickedKey = "";
  Data.pianoClickedKey = item;
  Checker(Data.notesDisplayed, Data.indexd, Data.pianoClickedKey);
  console.log("clickedKey:", Data.pianoClickedKey, "index:", Data.indexd);
  Data.indexd++;
}

function Piano(props) {
  return (
    <div style={{ display: "flex", position: "absolute" }}>
      {notes.map((item) => {
        return (
          <div key={item}>
            <div
              style={StyleSheet.whitekeys}
              onClick={() => setPianoClick(item)}
            />
          </div>
        );
      })}
      {blackkeys.map((item, key) => {
        return (
          <div
            style={{
              position: "absolute",
              left: `${godPleaseWork(key + 1)}px`
            }}
            key={item}
          >
            <div
              style={StyleSheet.blackkeys}
              onClick={() => setPianoClick(item)}
            />
            {item.at}
          </div>
        );
      })}
    </div>
  );
}

const StyleSheet = {
  blackkeys: {
    width: "25px",
    height: "100px",
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: "5px",
    borderWidth: "2px",
    backgroundColor: "black"
  },
  whitekeys: {
    width: "50px",
    height: "200px",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: "5px",
    borderWidth: "2px",
    backgroundColor: "white"
  }
};

export default Piano;
