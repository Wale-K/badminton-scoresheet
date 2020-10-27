import React from "react";
import { connect } from "react-redux";
import {
  incrementPlayerOnePoints,
  incrementPlayerTwoPoints,
  incrementPlayerThreePoints,
  incrementPlayerFourPoints,
  toggleMatchMode,
} from "../modules/actions";

const Scoresheet = (props) => {
  return (
    <div>
      <p>Team 1: {props.teamOneScore}</p>
      <p>Team 2: {props.teamTwoScore}</p>
      <button onClick={() => props.switchMode()}>
        {props.isSingles ? "Playing doubles?" : "Playing singles?"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("this is the state: ", state);
  return {
    isSingles: state.isSingles,
    teamOneScore: state.teamOneScore,
    teamTwoScore: state.teamTwoScore,
    playerOnePoints: state.playerOnePoints,
    playerTwoPoints: state.playerTwoPoints,
    playerThreePoints: state.playerThreePoints,
    playerFourPoints: state.playerFourPoints,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchMode: () => dispatch(toggleMatchMode()),
  };
};

export const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Scoresheet);
