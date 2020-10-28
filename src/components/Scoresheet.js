import React from "react";
import styled from "styled-components";
import allColors from "../modules/utilities";
import { connect } from "react-redux";
import {
  toggleMatchMode,
  updatePlayerName,
  incrementWinner,
} from "../modules/actions";

const ScoresheetContainer = styled.div`
  padding: 1rem;
  font-size: 1rem;
  height: 100vh;
  color: ${allColors.text};
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
  height: 50vh;
  td,
  th {
    border: solid 1px black;
  }

  td {
    width: 20%;
    text-align: right;
    vertical-align: bottom;
    margin: auto auto 0 auto;
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
          <td onClick={() => props.incrementWinner("playerOne", "smashes")}>
            {props.winners.playerOne.smashes}
          </td>
          <td onClick={() => props.incrementWinner("playerOne", "drops")}>
            {props.winners.playerOne.drops}
          </td>
          <td onClick={() => props.incrementWinner("playerOne", "long")}>
            {props.winners.playerOne.long}
          </td>
          <td onClick={() => props.incrementWinner("playerOne", "forced")}>
            {props.winners.playerOne.forced}
          </td>
        </WinnersRow>
        <WinnersRow>
          <th>{props.playerInfo[1].name}</th>
          <td onClick={() => props.incrementWinner("playerTwo", "smashes")}>
            {props.winners.playerTwo.smashes}
          </td>
          <td onClick={() => props.incrementWinner("playerTwo", "drops")}>
            {props.winners.playerTwo.drops}
          </td>
          <td onClick={() => props.incrementWinner("playerTwo", "long")}>
            {props.winners.playerTwo.long}
          </td>
          <td onClick={() => props.incrementWinner("playerTwo", "forced")}>
            {props.winners.playerTwo.forced}
          </td>
        </WinnersRow>
        <WinnersRow display={props.isSingles ? "none" : "span"}>
          <th>{props.playerInfo[2].name}</th>
          <td onClick={() => props.incrementWinner("playerThree", "smashes")}>
            {props.winners.playerThree.smashes}
          </td>
          <td onClick={() => props.incrementWinner("playerThree", "drops")}>
            {props.winners.playerThree.drops}
          </td>
          <td onClick={() => props.incrementWinner("playerThree", "long")}>
            {props.winners.playerThree.long}
          </td>
          <td onClick={() => props.incrementWinner("playerThree", "forced")}>
            {props.winners.playerThree.forced}
          </td>
        </WinnersRow>
        <WinnersRow display={props.isSingles ? "none" : "span"}>
          <th>{props.playerInfo[3].name}</th>
          <td onClick={() => props.incrementWinner("playerFour", "smashes")}>
            {props.winners.playerFour.smashes}
          </td>
          <td onClick={() => props.incrementWinner("playerFour", "drops")}>
            {props.winners.playerFour.drops}
          </td>
          <td onClick={() => props.incrementWinner("playerFour", "long")}>
            {props.winners.playerFour.long}
          </td>
          <td onClick={() => props.incrementWinner("playerFour", "forced")}>
            {props.winners.playerFour.forced}
          </td>
        </WinnersRow>
      </WinnersTable>
      <p>Please enter the players names:</p>

      {props.playerInfo.map((elem, index) => {
        return (
          <NamesInput
            value={elem.name}
            onChange={(event) =>
              props.updatePlayerName(index, event.target.value)
            }
            display={props.isSingles ? elem.display : "inline"}
          />
        );
      })}
    </ScoresheetContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isSingles: state.isSingles,
    playerInfo: state.playerInfo,
    winners: state.winners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchMode: () => dispatch(toggleMatchMode()),
    updatePlayerName: (index, name) => dispatch(updatePlayerName(index, name)),
    incrementWinner: (playerKey, winner) =>
      dispatch(incrementWinner(playerKey, winner)),
  };
};

export const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Scoresheet);

// -> Change the rest of the td fields so that the number in them shows the number of that type of winners that were hit.
//    Like they do now for player 1.

// -> Add a reset button to the scores
// -> When the scores are reset it record the winner of that game
// -> Add a clear data button that completely clears all the stored information.
// -> Add a confirmation button to toggle mode that will require confirmation to change modes
//    if the scores aren't 0 but the button is pressed.
// ->
