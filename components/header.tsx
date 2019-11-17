import React, { useContext } from "react";
import { ScoreContext } from "../lib/ScoreContext";

const Header = () => {
  const state = useContext(ScoreContext);

  return (
    <nav>
      <h2 className="title">LotR Clicker</h2>
      <p className="score">
        Score: {state.score} <span className="spacer">|</span> High Score:{" "}
        {state.highScore}
      </p>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Forum&display=swap");
        nav {
          display: flex;
          justify-content: space-between;
          background-color: #5d7c53;
          height: 5rem;
          align-items: center;
          margin: 0px 0px 50px 0px;
        }
        .title {
          color: white;
          font-size: 42px;
          margin-left: 2rem;
          font-family: "Forum", cursive;
        }
        .score {
          color: white;
          font-size: 22px;
          margin-right: 2rem;
          font-family: "Forum", cursive;
        }
        .spacer {
          font-size: 26px;
          margin: 0px 1rem 0px 1rem;
        }

        @media only screen and (max-width: 600px) {
          .title {
            color: white;
            font-size: 32px;
            margin-left: 2rem;
            font-family: "Forum", cursive;
          }
          .score {
            color: white;
            font-size: 18px;
            margin-right: 2rem;
            font-family: "Forum", cursive;
          }
          .spacer {
            display: block;
            font-size: 0px;
            margin: 0px 1rem 0px 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;
