import "./App.css";
import Data from "./Data";
import Piano from "./Piano";
import SheetMusic from "@slnsw/react-sheet-music";

const noteslist = ["a", "b", "c"];
const notesListed = ["a", "b", "c", "d", "e", "f", "g"];

function createRandomNotesArray(amount) {
  Data.notesDisplayed = [];
  Data.notesDisplayedString = "";
  for (var i = 0; i < amount; i++) {
    var rand = Math.floor(Math.random() * notesListed.length);
    Data.notesDisplayed.push(notesListed[rand]);
    Data.notesDisplayedString += `${notesListed[rand]}`;
  }
  Data.indexd = 0;
  console.log(Data.notesDisplayed);
  console.log(Data.notesDisplayedString);
}

function App() {
  createRandomNotesArray(10);
  console.log(Data.pianoClickedKey);
  return (
    <div style={{ color: "white" }}>
      <p>hello</p>
      <SheetMusic notation="Abc" />
      <p>piano v</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Piano onClick={() => console.log(Data.pianoClickedKey)} />
      </div>
    </div>
  );
}

export default App;
