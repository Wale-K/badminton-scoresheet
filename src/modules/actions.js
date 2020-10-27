export const INCREMENET_PLAYER_ONE_POINTS = "INCREMENET_PLAYER_ONE_POINTS";
export const INCREMENET_PLAYER_TWO_POINTS = "INCREMENET_PLAYER_TWO_POINTS";
export const INCREMENET_PLAYER_THREE_POINTS = "INCREMENET_PLAYER_THREE_POINTS";
export const INCREMENET_PLAYER_FOUR_POINTS = "INCREMENET_PLAYER_FOUR_POINTS";

export const incrementPlayerOne = () => {
  return { type: INCREMENET_PLAYER_ONE_POINTS };
};

export const incrementPlayerTwo = () => {
  return { type: INCREMENET_PLAYER_TWO_POINTS };
};

export const incrementPlayerThree = () => {
  return { type: INCREMENET_PLAYER_THREE_POINTS };
};

export const incrementPlayerFour = () => {
  return { type: INCREMENET_PLAYER_FOUR_POINTS };
};
