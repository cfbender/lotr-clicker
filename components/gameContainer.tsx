import React, { useEffect, useState, useContext } from "react";
import { ScoreContext } from "../lib/ScoreContext";
import characterData from "../public/characters/characters.json";

import Character from "./character";

const GameContainer = ({ dispatch }) => {
  const state = useContext(ScoreContext);
  const [characters, updateCharacters] = useState(characterData);
  const [selectedChars, setSelectedChars] = useState([]);

  const shuffleCharacters = () =>
    updateCharacters(characters.sort(() => Math.random() - 0.5));

  const handleClick = e => {
    //if just won or lost, reset
    if (state.win || state.loss) {
      dispatch("reset");
    }
    if (!selectedChars.includes(e.target.id)) {
      setSelectedChars([...selectedChars, e.target.id]);
      dispatch("score++");
      state.score >= state.highScore ? dispatch("setHigh") : null;
      if (state.score === characters.length - 1) {
        dispatch("setWin");
        setSelectedChars([]);
      }
      shuffleCharacters();
    } else {
      dispatch("setLoss");
      setSelectedChars([]);
    }
  };

  useEffect(() => {
    shuffleCharacters();
  }, []);
  return (
    <div>
      <h2>
        Greetings, traveler. Click on each character once to get a point, if you
        click the same one twice you lose!
      </h2>
      {state.win && <h2 className="win-text">You win! Congratulations!</h2>}
      {state.loss && <h2 className="loss-text">You lose! Try again.</h2>}
      <div className="char-container">
        {characters.map(({ id, name, file }) => (
          <Character
            key={id}
            id={id}
            name={name}
            file={file}
            click={handleClick}
          />
        ))}
      </div>
      <style jsx>{`
        h2 {
          font-family: sans-serif;
          font-weight: lighter;
          font-size: 18px;
          color: #666;
          text-align: center;
        }

        .char-container {
          max-width: 900px;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default GameContainer;
