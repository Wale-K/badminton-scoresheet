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
  p {
    margin: 1rem 0;
  }
  div {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
  }
`;

const NamesInput = styled.input`
  display: ${(props) => props.display};
`;
const WinnersTable = styled.table`
  width: 100%;
  height: 20rem;
  td,
  th {
    border: solid 1px black;
  }

  td {
    width: 20%;
    :hover {
      cursor: pointer;
    }
  }

  tr:nth-child(even) {
    background-color: orange;
  }
`;

const WinnersRow = styled.tr`
  display: ${(props) => props.display};
`;

const WinnersButtons = styled.button`
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

      <br />
      <WinnersTable>
        <WinnersRow>
          <th></th>
          <th>Smash</th>
          <th>Drop</th>
          <th>Long</th>
          <th>Forced</th>
        </WinnersRow>
        <WinnersRow>
          <th>{props.playerInfo[0].name}</th>
          <td onClick={() => props.playerOneSmash()}>
            {props.winners.playerOne.smashes}
          </td>
          <td onClick={() => props.playerOneDrop()}>
            {props.winners.playerOne.drops}
          </td>
          <td onClick={() => props.playerOneLong()}>
            {props.winners.playerOne.long}
          </td>
          <td onClick={() => props.playerOneForced()}>
            {props.winners.playerOne.forced}
          </td>
        </WinnersRow>
        <WinnersRow>
          <th>{props.playerInfo[1].name}</th>
          <td onClick={() => props.playerTwoSmash()}>2</td>
          <td onClick={() => props.playerTwoDrop()}>2</td>
          <td onClick={() => props.playerTwoLong()}>2</td>
          <td onClick={() => props.playerTwoForced()}>2</td>
        </WinnersRow>
        <WinnersRow display={props.isSingles ? "none" : "span"}>
          <th>{props.playerInfo[2].name}</th>
          <td onClick={() => props.playerThreeSmash()}>3</td>
          <td onClick={() => props.playerThreeDrop()}>3</td>
          <td onClick={() => props.playerThreeLong()}>3</td>
          <td onClick={() => props.playerThreeForced()}>3</td>
        </WinnersRow>
        <WinnersRow display={props.isSingles ? "none" : "span"}>
          <th>{props.playerInfo[3].name}</th>
          <td onClick={() => props.playerFourSmash()}>4</td>
          <td onClick={() => props.playerFourDrop()}>4</td>
          <td onClick={() => props.playerFourLong()}>4</td>
          <td onClick={() => props.playerFourForced()}>4</td>
        </WinnersRow>
      </WinnersTable>
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
