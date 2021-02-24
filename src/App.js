import "./App.css";
import React from "react";
import Data from "./Data";
import Piano from "./Piano";
import { Button } from "@material-ui/core";
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
  "G"
];
var wrongorRight = "----";

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
      rightorWrong: Data.rightorWrong
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
            justifyContent: "center"
          }}
        >
          <Notation
            notation={Data.notesDisplayedString}
            engraverParams={{ scale: window.innerWidth / 500 }}
          />
        </div>

        <p
          unselectable="on"
          className="answerDisplay"
          style={{
            display: "flex",
            opacity: Data.opacity,
            justifyContent: "center"
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
            justifyContent: "center"
          }}
        >
          {Data.correctNote.toUpperCase()}
        </p>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          onClick={() =>
            this.setState({
              opacity: Data.opacity,
              rightorWrong: Data.rightorWrong
            })
          }
        >
          <Piano />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div style={{ position: "absolute", top: "75%" }}>
            <Button variant="contained">New Notes</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
