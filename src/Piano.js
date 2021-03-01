import React from "react";
import Data from "./Data";

const notes = ["c", "d", "e", "f", "g", "a", "b"];
const blackkeys = ["cd", "de", "fg", "ga", "ab"];

var thisthing = 0;

function correct() {
  Data.opacity = 1;
  Data.rightorWrong = "Correct.";
}

function wrong() {
  Data.opacity = 1;
  Data.rightorWrong = "Wrong.";
}

String.prototype.insert = function (index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }
  return string + this;
};

function marking(index) {
  var newNotesDisplayed = Data.notesDisplayedString.replace("!mark!", "");
  Data.notesDisplayedString = newNotesDisplayed;
  var initialSpacing = 10;

  if ((index + 1) % 4 === 0 && index !== 0) {
    Data.lastSpacing++;
  }

  if (Data.isTreble === true) {
    initialSpacing = 33;
  }

  Data.notesDisplayedString = Data.notesDisplayedString.insert(
    initialSpacing + Data.notesDisplayedOther[index].length + Data.lastSpacing,
    "!mark!"
  );

  Data.lastSpacing = Data.notesDisplayedOther[index].length + Data.lastSpacing;
}
function Checker(array, index, answer) {
  marking(index);

  var isSharps = false;
  var isFlats = false;
  var replace = array[index].replace("2", "");
  Data.correctNote = array[index].replace("2", "");

  if (array[index].substring(0, 1) === "^") {
    isSharps = true;
  } else if (array[index].substring(0, 1) === "_") {
    isFlats = true;
  }

  if (isSharps === true) {
    terribleSharpChecker(replace, answer);
  } else if (isFlats === true) {
    terribleFlatChecker(replace, answer);
  } else if (
    answer.toUpperCase() === array[index].replace("2", "").toUpperCase()
  ) {
    correct();
  } else {
    wrong();
  }
  index++;
}

function terribleSharpChecker(note, answer) {
  var capNote = note.replace("^", "").toUpperCase();
  var answerNote = answer.toUpperCase();

  Data.correctNote = `${capNote} Sharp`;

  if (capNote === "C" && answerNote === "CD") {
    correct();
  } else if (capNote === "D" && answerNote === "DE") {
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

function terribleFlatChecker(note, answer) {
  var capNote = note.replace("_", "").toUpperCase();
  var answerNote = answer.toUpperCase();

  Data.correctNote = `${capNote} Flat`;

  if (capNote === "C" && answerNote === "B") {
    correct();
  } else if (capNote === "D" && answerNote === "CD") {
    correct();
  } else if (capNote === "E" && answerNote === "DE") {
    correct();
  } else if (capNote === "F" && answerNote === "E") {
    correct();
  } else if (capNote === "G" && answerNote === "FG") {
    correct();
  } else if (capNote === "A" && answerNote === "GA") {
    correct();
  } else if (capNote === "B" && answerNote === "AB") {
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
  Checker(Data.notesDisplayedOther, Data.indexd, Data.pianoClickedKey);
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
