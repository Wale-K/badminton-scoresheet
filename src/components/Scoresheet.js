import React from "react";
import { connect } from "react-redux";
import {
  incrementPlayerOnePoints,
  incrementPlayerTwoPoints,
  incrementPlayerThreePoints,
  incrementPlayerFourPoints,
} from "../modules/actions";

const Scoresheet = (props) => {
  return (
    <div>
      <p>Team 1: {props.teamOneScore}</p>
      <p>Team 2: {props.teamTwoScore}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
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
  return {};
};

export const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Scoresheet);
