import React from "react";
import styled from "styled-components";
import allColors from "../modules/utilities";
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
  incrementPlayerThreeSmashPoint,
  incrementPlayerThreeDropPoint,
  incrementPlayerThreeLongPoint,
  incrementPlayerThreeForcedPoint,
  incrementPlayerFourSmashPoint,
  incrementPlayerFourDropPoint,
  incrementPlayerFourLongPoint,
  incrementPlayerFourForcedPoint,
} from "../modules/actions";

const ScoresheetContainer = styled.div`
  padding: 1rem;
  font-size: 1rem;
`;

const MatchModeToggle = styled.div`
  display: flex;
  background-color: ${allColors.pink};
  width: 20%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 0 1rem auto;
  :hover {
    cursor: pointer;
    background-color: red;
  }
`;

const Scoreboard = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  background-color: yellow;

  div {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
  }
`;

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
    <ScoresheetContainer>
      <MatchModeToggle onClick={() => props.switchMode()}>
        {props.isSingles ? "Playing doubles?" : "Playing singles?"}
      </MatchModeToggle>
      <Scoreboard>
        <div>
          <p>{props.isSingles ? props.playerInfo[0].name : "Team 1"}</p>
          <p>
            {props.isSingles ? playerOneScore : playerOneScore + playerTwoScore}
          </p>
        </div>
        <div>
          <p>Vs.</p>
          <p>-</p>
        </div>
        <div>
          <p>{props.isSingles ? props.playerInfo[1].name : "Team 2"}</p>
          <p>
            {props.isSingles
              ? playerTwoScore
              : playerThreeScore + playerFourScore}
          </p>
        </div>
      </Scoreboard>

      <SinglesScoresheet display={props.isSingles ? "inline" : "none"}>
        {/* Player names in a game of singles */}
        {/* <p>{props.playerInfo[0].name}</p>
        <p>{props.playerInfo[1].name}</p> */}
      </SinglesScoresheet>

      <p>Please enter the players names:</p>

      <NamesInput value={props.playerInfo[0].name} />
      <NamesInput value={props.playerInfo[1].name} />
      <NamesInput
        value={props.playerInfo[2].name}
        display={props.isSingles ? "none" : "inline"}
      />
      <NamesInput
        value={props.playerInfo[3].name}
        display={props.isSingles ? "none" : "inline"}
      />
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
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerThreeSmash()}
      >
        Smash 3
      </DoublesButtons>
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerThreeDrop()}
      >
        Drop 3
      </DoublesButtons>
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerThreeLong()}
      >
        Long 3
      </DoublesButtons>
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerThreeForced()}
      >
        Forced 3
      </DoublesButtons>
      <br />
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerFourSmash()}
      >
        Smash 4
      </DoublesButtons>
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerFourDrop()}
      >
        Drop 4
      </DoublesButtons>
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerFourLong()}
      >
        Long 4
      </DoublesButtons>
      <DoublesButtons
        display={props.isSingles ? "none" : "inline"}
        onClick={() => props.playerFourForced()}
      >
        Forced 4
      </DoublesButtons>
    </ScoresheetContainer>
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
    playerThreeSmash: () => dispatch(incrementPlayerThreeSmashPoint()),
    playerThreeDrop: () => dispatch(incrementPlayerThreeDropPoint()),
    playerThreeLong: () => dispatch(incrementPlayerThreeLongPoint()),
    playerThreeForced: () => dispatch(incrementPlayerThreeForcedPoint()),
    playerFourSmash: () => dispatch(incrementPlayerFourSmashPoint()),
    playerFourDrop: () => dispatch(incrementPlayerFourDropPoint()),
    playerFourLong: () => dispatch(incrementPlayerFourLongPoint()),
    playerFourForced: () => dispatch(incrementPlayerFourForcedPoint()),
  };
};

export const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Scoresheet);

// -> Add a reset button to the scores
// -> When the scores are reset it record the winner of that game
// -> Add a clear data button that completely clears all the stored information.
// -> Add a confirmation button to toggle mode that will require confirmation to change modes
//    if the scores aren't 0 but the button is pressed.
// ->
