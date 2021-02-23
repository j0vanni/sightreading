import "./App.css";
import Data from "./Data";
import Piano from "./Piano";

const noteslist = ["a", "b", "c"];
const notesListed = ["a", "b", "c", "d", "e", "f", "g"];

function createRandomNotesArray(amount) {
  Data.notesDisplayed = [];
  for (var i = 0; i < amount; i++) {
    var rand = Math.floor(Math.random() * notesListed.length);
    Data.notesDisplayed.push(notesListed[rand]);
  }
  console.log(Data.notesDisplayed);
}

function App() {
  createRandomNotesArray(10);
  return (
    <div style={{ color: "white" }}>
      <p>hello</p>
      <p>piano v</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Piano />
      </div>
    </div>
  );
}

export default App;
