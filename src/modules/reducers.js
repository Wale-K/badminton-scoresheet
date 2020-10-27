import {
  INCREMENET_PLAYER_ONE_POINTS,
  INCREMENET_PLAYER_TWO_POINTS,
  INCREMENET_PLAYER_THREE_POINTS,
  INCREMENET_PLAYER_FOUR_POINTS,
  TOGGLE_MATCH_MODE,
} from "./actions";

export const initialState = {
  isSingles: true,
  playerInfo: [
    {
      singles: [
        { name: "Player 1", score: 0 },
        { name: "Player 2", score: 0 },
      ],
      doubles: [
        { name: "Player 3", score: 0 },
        { name: "Player 4", score: 0 },
      ],
    },
  ],
};

export default (state = initialState, action) => {
  console.log("reducers: ", state);

  switch (action.type) {
    case INCREMENET_PLAYER_ONE_POINTS:
      return {
        ...state,
        teamOneScore: state.teamOneScore + 1,
        playerOnePoints: state.playerOnePoints + 1,
      };

    case INCREMENET_PLAYER_TWO_POINTS:
      return {
        ...state,
        teamOneScore: state.teamOneScore + 1,
        playerTwoPoints: state.playerTwoPoints + 1,
      };

    case INCREMENET_PLAYER_THREE_POINTS:
      return {
        ...state,
        teamTwoScore: state.teamTwoScore + 1,
        playerThreePoints: state.playerThreePoints + 1,
      };

    case INCREMENET_PLAYER_FOUR_POINTS:
      return {
        ...state,
        teamTwoScore: state.teamTwoScore + 1,
        playerFourPoints: state.playerFourPoints + 1,
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
