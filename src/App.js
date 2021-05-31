import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",

  "😂": "Laughining Emoji",

  "😍": "Loving Emoji",
  "😎": "Cool Emoji",
  "😔": "Sad Emoji",
  "😭": "Crying Emoji",
  "😮": "Shocked Emoji"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    } else {
      setmeaning("fail to recognize this");
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>emoji we know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
