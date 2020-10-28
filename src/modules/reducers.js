import {
  TOGGLE_MATCH_MODE,
  INCREMENT_PLAYER_ONE_SMASH_POINT,
  INCREMENT_PLAYER_ONE_DROP_POINT,
  INCREMENT_PLAYER_ONE_LONG_POINT,
  INCREMENT_PLAYER_ONE_FORCED_POINT,
  INCREMENT_PLAYER_TWO_SMASH_POINT,
  INCREMENT_PLAYER_TWO_DROP_POINT,
  INCREMENT_PLAYER_TWO_LONG_POINT,
  INCREMENT_PLAYER_TWO_FORCED_POINT,
} from "./actions";

export const initialState = {
  isSingles: true,

  playerInfo: [
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
    { name: "Player 3", score: 0 },
    { name: "Player 4", score: 0 },
  ],
  winners: {
    playerOne: { smashes: 0, drops: 0, long: 0, forced: 0 },
    playerTwo: { smashes: 0, drops: 0, long: 0, forced: 0 },
    playerThree: { smashes: 0, drops: 0, long: 0, forced: 0 },
    playerFour: { smashes: 0, drops: 0, long: 0, forced: 0 },
  },
};

export default (state = initialState, action) => {
  //   console.log("reducers: ", state);

  switch (action.type) {
    case INCREMENT_PLAYER_ONE_SMASH_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerOne: {
            ...state.winners.playerOne,
            smashes: state.winners.playerOne.smashes + 1,
          },
        },
      };

    case INCREMENT_PLAYER_ONE_DROP_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerOne: {
            ...state.winners.playerOne,
            drops: state.winners.playerOne.drops + 1,
          },
        },
      };

    case INCREMENT_PLAYER_ONE_LONG_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerOne: {
            ...state.winners.playerOne,
            long: state.winners.playerOne.long + 1,
          },
        },
      };

    case INCREMENT_PLAYER_ONE_FORCED_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerOne: {
            ...state.winners.playerOne,
            forced: state.winners.playerOne.forced + 1,
          },
        },
      };

    case INCREMENT_PLAYER_TWO_SMASH_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerTwo: {
            ...state.winners.playerTwo,
            smashes: state.winners.playerTwo.smashes + 1,
          },
        },
      };

    case INCREMENT_PLAYER_TWO_DROP_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerTwo: {
            ...state.winners.playerTwo,
            drops: state.winners.playerTwo.drops + 1,
          },
        },
      };

    case INCREMENT_PLAYER_TWO_LONG_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerTwo: {
            ...state.winners.playerTwo,
            long: state.winners.playerTwo.long + 1,
          },
        },
      };

    case INCREMENT_PLAYER_TWO_FORCED_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerTwo: {
            ...state.winners.playerTwo,
            forced: state.winners.playerTwo.forced + 1,
          },
        },
      };

    case TOGGLE_MATCH_MODE:
      return {
        ...state,
        isSingles: !state.isSingles,
      };

    default:
      return state;
  }
};
