export const TOGGLE_MATCH_MODE = "TOGGLE_MATCH_MODE";
export const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
export const INCREMENT_WINNER = "INCREMENT_WINNER";
export const RESET_MATCH = "RESET_MATCH";

export const toggleMatchMode = () => {
  return { type: TOGGLE_MATCH_MODE };
};

export const updatePlayerName = (index, name) => {
  return {
    type: UPDATE_PLAYER_NAME,
    payload: { playerIndex: index, value: name },
  };
};

export const incrementWinner = (key, winnerType) => {
  return {
    type: INCREMENT_WINNER,
    payload: { playerKey: key, winner: winnerType },
  };
};

export const resetMatch = () => {
  return { type: RESET_MATCH };
};
