import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  incrementPlayerOnePoints,
  incrementPlayerTwoPoints,
  incrementPlayerThreePoints,
  incrementPlayerFourPoints,
  toggleMatchMode,
} from "../modules/actions";

const DoublesScoresheet = styled.div`
  display: ${(props) => props.display};
`;

const SinglesScoresheet = styled.div`
  display: ${(props) => props.display};
`;

const Scoresheet = (props) => {
  return (
    <div>
      <button onClick={() => props.switchMode()}>
        {props.isSingles ? "Playing doubles?" : "Playing singles?"}
      </button>
      <SinglesScoresheet display={props.isSingles ? "block" : "none"}>
        {props.playerInfo[0].singles.map((elem) => {
          return (
            <p key={elem.name}>
              {elem.name}: {elem.score}
            </p>
          );
        })}
      </SinglesScoresheet>
      <DoublesScoresheet display={props.isSingles ? "none" : "block"}>
        <p>
          Team 1:{" "}
          {props.playerInfo[0].singles[0].score +
            props.playerInfo[0].singles[1].score}
        </p>
        <p>
          Team 2:{" "}
          {props.playerInfo[0].doubles[0].score +
            props.playerInfo[0].doubles[1].score}
        </p>
      </DoublesScoresheet>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("this is the state: ", state);
  return {
    isSingles: state.isSingles,
    playerInfo: state.playerInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchMode: () => dispatch(toggleMatchMode()),
  };
};

export const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Scoresheet);
