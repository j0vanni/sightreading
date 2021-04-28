import React from "react";
import Data from "./Data";
import a5 from "./note sounds/a5.mp3";
import b5 from "./note sounds/b5.mp3";
import c4 from "./note sounds/c4.mp3";
import d4 from "./note sounds/d4.mp3";
import e4 from "./note sounds/e4.mp3";
import f4 from "./note sounds/f4.mp3";
import g4 from "./note sounds/g4.mp3";
import adash5 from "./note sounds/a-5.mp3";
import cdash4 from "./note sounds/c-4.mp3";
import ddash4 from "./note sounds/d-4.mp3";
import fdash4 from "./note sounds/f-4.mp3";
import gdash4 from "./note sounds/g-4.mp3";

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
  var isSharps = false;
  var isFlats = false;
  var replace = array[index].replace("2", "");
  Data.correctNote = replace.replace(",,", "");

  if (array[index].substring(0, 1) === "^") {
    isSharps = true;
  } else if (array[index].substring(0, 1) === "_") {
    isFlats = true;
  }

  if (isSharps === true) {
    terribleSharpChecker(replace.replace(",,", ""), answer);
  } else if (isFlats === true) {
    terribleFlatChecker(replace.replace(",,", ""), answer);
  } else if (answer.toUpperCase() === replace.replace(",,", "").toUpperCase()) {
    correct();
  } else {
    wrong();
  }

  if (Data.rightorWrong === "Wrong." && !Data.wrongNotes) {
  } else {
    marking(index);

    index++;
    Data.indexd++;
  }
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
  playAudio(Data.pianoClickedKey);
  Checker(Data.notesDisplayedOther, Data.indexd, Data.pianoClickedKey);
  Data.opacity = 1;
}

function playAudio(audioFile) {
  let audio;
  switch (audioFile) {
    case "a":
      audio = new Audio(a5);
      break;
    case "b":
      audio = new Audio(b5);
      break;
    case "c":
      audio = new Audio(c4);
      break;
    case "d":
      audio = new Audio(d4);
      break;
    case "e":
      audio = new Audio(e4);
      break;
    case "f":
      audio = new Audio(f4);
      break;
    case "g":
      audio = new Audio(g4);
      break;
    case "cd":
      audio = new Audio(cdash4);
      break;
    case "de":
      audio = new Audio(ddash4);
      break;
    case "fg":
      audio = new Audio(fdash4);
      break;
    case "ga":
      audio = new Audio(gdash4);
      break;
    case "ab":
      audio = new Audio(adash5);
      break;
  }
  audio.play(audio);
}

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whitekeyColor: "white",
      blackkeyColor: "black",
    };
  }
  render() {
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
