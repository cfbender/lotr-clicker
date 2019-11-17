import React, { useReducer } from "react";
import Head from "next/head";
import Header from "../components/header";
import GameContainer from "../components/gameContainer";
import { ScoreContext } from "../lib/ScoreContext";

function reducer(state, action) {
  switch (action) {
    case "score++":
      return {
        score: state.score + 1,
        highScore: state.highScore,
        win: state.win,
        loss: state.loss
      };
    case "setHigh":
      return {
        score: state.score,
        highScore: state.score,
        win: state.win,
        loss: state.loss
      };
    case "setWin":
      return { score: 0, highScore: state.score, win: true, loss: false };
    case "reset":
      return { highScore: state.highScore, score: 0, win: false, loss: false };
    case "setLoss":
      return { score: 0, highScore: state.highScore, win: false, loss: true };
    default:
      throw new Error(
        `Action ${JSON.stringify(action)} not available in reducer`
      );
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, {
    highScore: 0,
    score: 0,
    win: false,
    loss: false
  });

  return (
    <div>
      <Head>
        <title>LotR Clicker</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={
            process.env.NODE_ENV !== "test"
              ? "apple-touch-icon.png"
              : "/apple-touch-icon.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={
            process.env.NODE_ENV !== "test"
              ? "favicon-32x32.png"
              : "/favicon-32x32.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={
            process.env.NODE_ENV !== "test"
              ? "favicon-16x16.png"
              : "/favicon-16x16.png"
          }
        />
        <link
          rel="manifest"
          href={
            process.env.NODE_ENV !== "test"
              ? "site.webmanifest"
              : "/site.webmanifest"
          }
        />
      </Head>
      <ScoreContext.Provider value={state}>
        <Header />

        <GameContainer dispatch={dispatch} />
      </ScoreContext.Provider>
      <style jsx global>{`
        body {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Home;
