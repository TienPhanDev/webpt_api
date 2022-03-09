import "./App.css";
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [character, setCharacter] = useState();

  // The code below can also be used to fetch data on page load instead of waiting for user input
  // useEffect(() => {
  //   fetch("http://interview.wptdev.com/api/killfeed")
  //     .then((response) => response.json())
  //     .then((data) => setCharacter(data))
  //     .catch((error) => console.log(error.message));
  // }, []);

  const handleSubmit = () => {
    fetch("http://interview.wptdev.com/api/killfeed")
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="App">
      <button
        onClick={handleSubmit}
        className="w3-button w3-green w3-margin-top w3-padding-16	"
      >
        Click to generate character
      </button>
      {character && <Profile data={character} />}
    </div>
  );
}

export default App;

/*
The next steps would be:
1 - Create container to display both characters upon loading
2 - Add event listeners to each character card corresponding to actions such as `attack` 
3 - Persist the data by using localStorage to house both characters state and when event listeners are clicked
then calculate how much health or damage was done in that action and render correct information on screen without refreshing or reloading page
4 - Calculate how to declare a winner and restart the game.
5 - Visuals and UI cleanup.
6 - Error handling for when responses are 500 or 403 and components conditionally rendering.
*/
