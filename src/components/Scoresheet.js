import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  incrementPlayerOnePoints,
  incrementPlayerTwoPoints,
  incrementPlayerThreePoints,
  incrementPlayerFourPoints,
  toggleMatchMode,
  incrementPlayerOneSmashPoint,
} from "../modules/actions";

const DoublesScoresheet = styled.div`
  display: ${(props) => props.display};
`;

const SinglesScoresheet = styled.div`
  display: ${(props) => props.display};
`;

const NamesInput = styled.input`
  display: ${(props) => props.display};
`;

const Scoresheet = (props) => {
  const playerOneScore = Object.values(props.winners.playerOne).reduce(
    (x, y) => {
      return x + y;
    }
  );

  const playerTwoScore = Object.values(props.winners.playerTwo).reduce(
    (x, y) => {
      return x + y;
    }
  );

  const playerThreeScore = Object.values(props.winners.playerThree).reduce(
    (x, y) => {
      return x + y;
    }
  );

  const playerFourScore = Object.values(props.winners.playerFour).reduce(
    (x, y) => {
      return x + y;
    }
  );

  return (
    <div>
      <button onClick={() => props.switchMode()}>
        {props.isSingles ? "Playing doubles?" : "Playing singles?"}
      </button>

      <SinglesScoresheet display={props.isSingles ? "block" : "none"}>
        <p>
          {props.playerInfo[0].name}: {playerOneScore}
        </p>
        <p>
          {props.playerInfo[1].name}: {playerTwoScore}
        </p>

        {/* Player names in a game of singles */}
        {/* <p>{props.playerInfo[0].name}</p>
        <p>{props.playerInfo[1].name}</p> */}
      </SinglesScoresheet>

      <DoublesScoresheet display={props.isSingles ? "none" : "block"}>
        <p>Team 1: {playerOneScore + playerTwoScore}</p>
        <p>Team 2: {playerThreeScore + playerFourScore}</p>

        {/* Player Names in a game of doubles. */}
        {/* {props.playerInfo.map((elem) => {
          return <p key={elem.name}>{elem.name}</p>;
        })} */}
      </DoublesScoresheet>
      <p>Please enter the players names:</p>

      <NamesInput />
      <NamesInput />
      <NamesInput display={props.isSingles ? "none" : "flex"} />
      <NamesInput display={props.isSingles ? "none" : "flex"} />

      <button onClick={() => props.playerOneSmash()}>Smash 1</button>
      <button>Drop 1</button>
      <button>Long 1</button>
      <button>Forced 1</button>
      <button>Smash 2</button>
      <button>Drop 2</button>
      <button>Long 2</button>
      <button>Forced 2</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log("this is the state: ", state);
  return {
    isSingles: state.isSingles,
    playerInfo: state.playerInfo,
    winners: state.winners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchMode: () => dispatch(toggleMatchMode()),
    playerOneSmash: () => dispatch(incrementPlayerOneSmashPoint()),
  };
};

export const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Scoresheet);
