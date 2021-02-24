import "./App.css";
import React from "react";
import Data from "./Data";
import Piano from "./Piano";
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
var wrongorRight = "----";
var markPositioned = 1;

function notePositional(count) {
  return 67 * count + 177.5;
}

function createRandomNotesArray(amount) {
  Data.opacity = 0;
  Data.notesDisplayed = [];
  Data.notesDisplayedString = "";
  for (var i = 0; i < amount; i++) {
    var rand = Math.floor(Math.random() * notesListed.length);
    Data.notesDisplayed.push(notesListed[rand]);
    Data.notesDisplayedString += `${notesListed[rand]} `;
  }
  Data.indexd = 0;
}
createRandomNotesArray(10);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: Data.opacity,
      rightorWrong: Data.rightorWrong,
      markPosition: 0,
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
            animate
            notation={Data.notesDisplayedString}
            engraverParams={{ scale: window.innerWidth / 500 }}
          />
        </div>
        <p
          style={{
            position: "absolute",
            left: `${this.state.markPositional}px`,
          }}
        >
          |
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
          {this.state.rightorWrong}
        </p>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          onClick={
            (() =>
              this.setState({
                opacity: Data.opacity,
                rightorWrong: Data.rightorWrong,
                markPosition: notePositional(markPositioned),
              }),
            markPositioned++)
          }
        >
          <Piano />
        </div>
      </div>
    );
  }
}

export default App;
