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
  INCREMENT_PLAYER_THREE_SMASH_POINT,
  INCREMENT_PLAYER_THREE_DROP_POINT,
  INCREMENT_PLAYER_THREE_LONG_POINT,
  INCREMENT_PLAYER_THREE_FORCED_POINT,
  INCREMENT_PLAYER_FOUR_SMASH_POINT,
  INCREMENT_PLAYER_FOUR_DROP_POINT,
  INCREMENT_PLAYER_FOUR_LONG_POINT,
  INCREMENT_PLAYER_FOUR_FORCED_POINT,
  UPDATE_PLAYER_NAME,
} from "./actions";

export const initialState = {
  isSingles: true,

  playerInfo: [
    { name: "Player 1" },
    { name: "Player 2" },
    { name: "Player 3" },
    { name: "Player 4" },
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

    case INCREMENT_PLAYER_THREE_SMASH_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerThree: {
            ...state.winners.playerThree,
            smashes: state.winners.playerThree.smashes + 1,
          },
        },
      };

    case INCREMENT_PLAYER_THREE_DROP_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerThree: {
            ...state.winners.playerThree,
            drops: state.winners.playerThree.drops + 1,
          },
        },
      };

    case INCREMENT_PLAYER_THREE_LONG_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerThree: {
            ...state.winners.playerThree,
            long: state.winners.playerThree.long + 1,
          },
        },
      };

    case INCREMENT_PLAYER_THREE_FORCED_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerThree: {
            ...state.winners.playerThree,
            forced: state.winners.playerThree.forced + 1,
          },
        },
      };

    case INCREMENT_PLAYER_FOUR_SMASH_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerFour: {
            ...state.winners.playerFour,
            smashes: state.winners.playerFour.smashes + 1,
          },
        },
      };

    case INCREMENT_PLAYER_FOUR_DROP_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerFour: {
            ...state.winners.playerFour,
            drops: state.winners.playerFour.drops + 1,
          },
        },
      };

    case INCREMENT_PLAYER_FOUR_LONG_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerFour: {
            ...state.winners.playerFour,
            long: state.winners.playerFour.long + 1,
          },
        },
      };

    case INCREMENT_PLAYER_FOUR_FORCED_POINT:
      return {
        ...state,
        winners: {
          ...state.winners,
          playerFour: {
            ...state.winners.playerFour,
            forced: state.winners.playerFour.forced + 1,
          },
        },
      };

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

    default:
      return state;
  }
};
