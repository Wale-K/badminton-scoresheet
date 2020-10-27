import {
  INCREMENET_PLAYER_ONE_POINTS,
  INCREMENET_PLAYER_TWO_POINTS,
  INCREMENET_PLAYER_THREE_POINTS,
  INCREMENET_PLAYER_FOUR_POINTS,
} from "./actions";

export const initialState = {
  isSingles: true,
  teamOneScore: 0,
  teamTwoScore: 0,
  playerOnePoints: 0,
  playerTwoPoints: 0,
  playerThreePoints: 0,
  playerFourPoints: 0,
};

export default (state = initialState, action) => {
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
  }
};
