export const TOGGLE_MATCH_MODE = "TOGGLE_MATCH_MODE";

export const INCREMENT_PLAYER_ONE_SMASH_POINT =
  "INCREMENT_PLAYER_ONE_SMASH_POINT";
export const INCREMENT_PLAYER_ONE_DROP_POINT =
  "INCREMENT_PLAYER_ONE_DROP_POINT";
export const INCREMENT_PLAYER_ONE_LONG_POINT =
  "INCREMENT_PLAYER_ONE_LONG_POINT";
export const INCREMENT_PLAYER_ONE_FORCED_POINT =
  "INCREMENT_PLAYER_ONE_FORCED_POINT";

export const INCREMENT_PLAYER_TWO_SMASH_POINT =
  "INCREMENT_PLAYER_TWO_SMASH_POINT";
export const INCREMENT_PLAYER_TWO_DROP_POINT =
  "INCREMENT_PLAYER_TWO_DROP_POINT";
export const INCREMENT_PLAYER_TWO_LONG_POINT =
  "INCREMENT_PLAYER_TWO_LONG_POINT";
export const INCREMENT_PLAYER_TWO_FORCED_POINT =
  "INCREMENT_PLAYER_TWO_FORCED_POINT";

export const incrementPlayerOneSmashPoint = () => {
  return { type: INCREMENT_PLAYER_ONE_SMASH_POINT };
};

export const incrementPlayerOneDropPoint = () => {
  return { type: INCREMENT_PLAYER_ONE_DROP_POINT };
};

export const incrementPlayerOneLongPoint = () => {
  return { type: INCREMENT_PLAYER_ONE_LONG_POINT };
};

export const incrementPlayerOneForcedPoint = () => {
  return { type: INCREMENT_PLAYER_ONE_FORCED_POINT };
};

export const incrementPlayerTwoSmashPoint = () => {
  return { type: INCREMENT_PLAYER_TWO_SMASH_POINT };
};

export const incrementPlayerTwoDropPoint = () => {
  return { type: INCREMENT_PLAYER_TWO_DROP_POINT };
};

export const incrementPlayerTwoLongPoint = () => {
  return { type: INCREMENT_PLAYER_TWO_LONG_POINT };
};

export const incrementPlayerTwoForcedPoint = () => {
  return { type: INCREMENT_PLAYER_TWO_FORCED_POINT };
};

export const toggleMatchMode = () => {
  return { type: TOGGLE_MATCH_MODE };
};
