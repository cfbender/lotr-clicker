import React from "react";

export const ScoreContext = React.createContext({
  highScore: 0,
  score: 0,
  win: false,
  loss: false
});
