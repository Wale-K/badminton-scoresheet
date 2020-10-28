import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  toggleMatchMode,
  incrementPlayerOneSmashPoint,
  incrementPlayerOneDropPoint,
  incrementPlayerOneLongPoint,
  incrementPlayerOneForcedPoint,
  incrementPlayerTwoSmashPoint,
  incrementPlayerTwoDropPoint,
  incrementPlayerTwoLongPoint,
  incrementPlayerTwoForcedPoint,
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

const DoublesButtons = styled.button`
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

      <SinglesScoresheet display={props.isSingles ? "inline" : "none"}>
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

      <DoublesScoresheet display={props.isSingles ? "none" : "inline"}>
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
      <NamesInput display={props.isSingles ? "none" : "inline"} />
      <NamesInput display={props.isSingles ? "none" : "inline"} />
      <br />
      <button onClick={() => props.playerOneSmash()}>Smash 1</button>
      <button onClick={() => props.playerOneDrop()}>Drop 1</button>
      <button onClick={() => props.playerOneLong()}>Long 1</button>
      <button onClick={() => props.playerOneForced()}>Forced 1</button>
      <br />
      <button onClick={() => props.playerTwoSmash()}>Smash 2</button>
      <button onClick={() => props.playerTwoDrop()}>Drop 2</button>
      <button onClick={() => props.playerTwoLong()}>Long 2</button>
      <button onClick={() => props.playerTwoForced()}>Forced 2</button>
      <br />
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Smash 3
      </DoublesButtons>
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Drop 3
      </DoublesButtons>
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Long 3
      </DoublesButtons>
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Forced 3
      </DoublesButtons>
      <br />
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Smash 4
      </DoublesButtons>
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Drop 4
      </DoublesButtons>
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Long 4
      </DoublesButtons>
      <DoublesButtons display={props.isSingles ? "none" : "inline"}>
        Forced 4
      </DoublesButtons>
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
    playerOneDrop: () => dispatch(incrementPlayerOneDropPoint()),
    playerOneLong: () => dispatch(incrementPlayerOneLongPoint()),
    playerOneForced: () => dispatch(incrementPlayerOneForcedPoint()),
    playerTwoSmash: () => dispatch(incrementPlayerTwoSmashPoint()),
    playerTwoDrop: () => dispatch(incrementPlayerTwoDropPoint()),
    playerTwoLong: () => dispatch(incrementPlayerTwoLongPoint()),
    playerTwoForced: () => dispatch(incrementPlayerTwoForcedPoint()),
  };
};

export const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Scoresheet);
