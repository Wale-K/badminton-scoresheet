import {
  TOGGLE_MATCH_MODE,
  UPDATE_PLAYER_NAME,
  INCREMENT_WINNER,
} from "./actions";

export const initialState = {
  isSingles: true,

  playerInfo: [
    { name: "Player 1", display: "inline" },
    { name: "Player 2", display: "inline" },
    { name: "Player 3", display: "none" },
    { name: "Player 4", display: "none" },
  ],

  winners: {
    playerOne: { smashes: 0, drops: 0, long: 0, forced: 0 },
    playerTwo: { smashes: 0, drops: 0, long: 0, forced: 0 },
    playerThree: { smashes: 0, drops: 0, long: 0, forced: 0 },
    playerFour: { smashes: 0, drops: 0, long: 0, forced: 0 },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MATCH_MODE:
      return {
        ...state,
        isSingles: !state.isSingles,
        winners: {
          playerOne: { smashes: 0, drops: 0, long: 0, forced: 0 },
          playerTwo: { smashes: 0, drops: 0, long: 0, forced: 0 },
          playerThree: { smashes: 0, drops: 0, long: 0, forced: 0 },
          playerFour: { smashes: 0, drops: 0, long: 0, forced: 0 },
        },
      };

    case UPDATE_PLAYER_NAME:
      return {
        ...state,
        playerInfo: state.playerInfo.map((player, index) => {
          if (index === action.payload.playerIndex) {
            player.name = action.payload.value;
          }
          return player;
        }),
      };

    case INCREMENT_WINNER:
      return {
        ...state,
        winners: {
          ...state.winners,
          [action.payload.playerKey]: {
            ...state.winners[action.payload.playerKey],
            [action.payload.winner]:
              state.winners[action.payload.playerKey][action.payload.winner] +
              1,
          },
        },
      };

    default:
      return state;
  }
};
