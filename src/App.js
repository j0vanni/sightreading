import "./App.css";
import React from "react";
import Data from "./Data";
import Piano from "./Piano";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { Notation } from "react-abc";

const noteslist = ["a", "b", "c"];
const notesListed = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

const notesListedSharps = [
  "^a",
  "^b",
  "^c",
  "^d",
  "^e",
  "^f",
  "^g",
  "^A",
  "^B",
  "^C",
  "^D",
  "^E",
  "^F",
  "^G",
];

const notesListedFlats = [
  "_a",
  "_b",
  "_c",
  "_d",
  "_e",
  "_f",
  "_g",
  "_A",
  "_B",
  "_C",
  "_D",
  "_E",
  "_F",
  "_G",
];

var wrongorRight = "----";

//add !mark! before the note to hightlight it
//would be good for the user to keep track on which note
//they are on

//^ - sharp, _ - flat

//add (V: V3 clef=bass\n[V: V3]) at start of string to make treble also add
// ,,2 after notes to make it work

function createRandomNotesArray(amount) {
  console.log(Data.isSharp, Data.isFlat);
  Data.opacity = 0;
  Data.notesDisplayed = [];
  Data.notesDisplayedString = "";
  for (var i = 0; i < amount; i++) {
    var rand = Math.floor(Math.random() * notesListed.length);
    Data.notesDisplayed.push(notesListed[rand]);
    Data.notesDisplayedString += `${notesListed[rand]}2`;
  }
  Data.indexd = 0;
  console.log(Data.notesDisplayed);
  console.log(Data.notesDisplayedString);
}
createRandomNotesArray(10);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: Data.opacity,
      rightorWrong: Data.rightorWrong,
      notestoDisplay: Data.notesDisplayedString,
    };
  }

  render() {
    return (
      <div style={{ color: "white" }}>
        <p
          unselectable="on"
          className="answerDisplay"
          style={{ display: "flex", justifyContent: "center" }}
        >
          SIGHT READING PRACTICE
        </p>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Notation
            notation={this.state.notestoDisplay}
            engraverParams={{ scale: window.innerWidth / 500 }}
          />
        </div>

        <p
          unselectable="on"
          className="answerDisplay"
          style={{
            display: "flex",
            opacity: Data.opacity,
            justifyContent: "center",
          }}
        >
          {this.state.rightorWrong}
        </p>
        <p
          unselectable="on"
          className="answerDisplay"
          style={{
            display: "flex",
            opacity: Data.opacity,
            justifyContent: "center",
          }}
        >
          {Data.correctNote.toUpperCase()}
        </p>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          onClick={() =>
            this.setState({
              opacity: Data.opacity,
              rightorWrong: Data.rightorWrong,
            })
          }
        >
          <Piano />
        </div>
        <div
          style={{
            paddingTop: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  style={{ color: "white" }}
                  onChange={() => (Data.isSharp = !Data.isSharp)}
                ></Checkbox>
              }
              label="Include Sharps"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  style={{ color: "white" }}
                  onChange={() => (Data.isFlat = !Data.isFlat)}
                ></Checkbox>
              }
              label="Include Flats"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  style={{ color: "white" }}
                  onChange={() => (Data.isTreble = !Data.isTreble)}
                ></Checkbox>
              }
              label="Treble"
            ></FormControlLabel>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                createRandomNotesArray(10);
                this.setState({ notestoDisplay: Data.notesDisplayedString });
              }}
            >
              New Notes
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
