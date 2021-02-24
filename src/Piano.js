import React from "react";
import Data from "./Data";

const notes = ["c", "d", "e", "f", "g", "a", "b"];
const blackkeys = ["cd", "ed", "fg", "ga", "ab"];

var thisthing = 0;

function correct() {
  Data.opacity = 1;
  Data.rightorWrong = "Correct.";
}

function wrong() {
  Data.opacity = 1;
  Data.rightorWrong = "Wrong.";
}

function Checker(array, index, answer) {
  Data.correctNote = array[index];
  console.log(array[index]);

  if (array[index].substring(0, 1) === "^") {
    Data.isSharp = true;
    terribleSharpChecker(array[index].substring(1, 2), answer);
  }

  if (array[index] === "_") {
    Data.isFlat = true;
  }

  if (Data.isSharp === false || Data.isFlat === false) {
    var tempAnswer = answer.toUpperCase() === array[index].toUpperCase();
    if (tempAnswer) {
      correct();
    } else {
      wrong();
    }
    index++;
  } else if (Data.isSharp === true) {
    index++;
    terribleSharpChecker(array[index], answer);
  }
}

function terribleSharpChecker(note, answer) {
  console.log("answer is a sharp");
  var capNote = note.toUpperCase();
  var answerNote = answer.toUpperCase();

  console.log(capNote, answerNote);

  if (capNote === "C" && answerNote === "CD") {
    correct();
  } else if (capNote === "D" && answerNote === "ED") {
    correct();
  } else if (capNote === "E" && answerNote === "F") {
    correct();
  } else if (capNote === "F" && answerNote === "FG") {
    correct();
  } else if (capNote === "G" && answerNote === "GA") {
    correct();
  } else if (capNote === "A" && answerNote === "AB") {
    correct();
  } else if (capNote === "B" && answerNote === "C") {
    correct();
  } else {
    wrong();
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
  Data.indexd++;
  Data.opacity = 1;
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
              left: `${godPleaseWork(key + 1)}px`,
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
    backgroundColor: "black",
  },
  whitekeys: {
    width: "50px",
    height: "200px",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: "5px",
    borderWidth: "2px",
    backgroundColor: "white",
  },
};

export default Piano;
