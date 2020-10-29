import React from "react";
import styled from "styled-components";
import allColors, { handshake, shuttle } from "../modules/utilities";
import { connect } from "react-redux";
import {
  toggleMatchMode,
  updatePlayerName,
  incrementWinner,
  resetMatch,
} from "../modules/actions";

const ScoresheetContainer = styled.div`
  display: flex;
  font-size: 1rem;
  height: 100vh;
  color: ${allColors.text};
  background-color: ${allColors.primary};
  font-family: "PT Sans", sans-serif;
`;

const Side = styled.div`
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
`;

const ButtonDiv = styled.div`
  display: flex;
  border-radius: 5px;
  width: calc(30vw - 4rem);
  height: 5rem;
  justify-content: space-around;
  align-items: center;
  border: solid 1px white;

  :hover {
    cursor: pointer;
    background-color: ${allColors.background};
    color: ${allColors.primary};
  }

  svg {
    height: 1.5rem;
    width: auto;
  }
`;

const IconDiv = styled.div`
  display: flex;
  width: ${(props) => props.width};
`;

const ShuttleIcon = styled.svg`
  display: ${(props) => props.display};
`;

const Scoreboard = styled.div`
  display: flex;
  width: 70vw;
  border-bottom: solid 1px white;
  border-radius: 5px;
  background-color: ${allColors.beige};
  color: ${allColors.primary};
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
  height: 1rem;
`;
const WinnersTable = styled.table`
  background-color: ${allColors.primary};
  width: 70vw;
  height: 50vh;
  border: solid 1px white;
  border-radius: 5px;
  border-collapse: collapse;
  th:nth-child(2),
  th:nth-child(3),
  th:nth-child(4),
  th:nth-child(5) {
    background-color: white;
    color: ${allColors.primary};
    border-right: solid 1px ${allColors.primary};
    border-left: solid 1px ${allColors.primary};
  }

  td {
    padding: 10px;
    width: 20%;
    text-align: right;
    vertical-align: bottom;
    margin: auto auto 0 auto;
    border-right: solid 1px white;
    border-left: solid 1px white;
    :hover {
      cursor: pointer;
    }
  }

  tr:nth-child(even) {
    background-color: ${allColors.tertiary};
  }
`;

const WinnersRow = styled.tr`
  display: ${(props) => props.display};
`;

const PlayerNames = styled.div`
  display: flex;
  flex-direction: column;
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
      <Side
        color="white"
        padding="1rem"
        backgroundColor={allColors.primary}
        width="70vw"
      >
        <Scoreboard>
          <div>
            <p>{props.isSingles ? props.playerInfo[0].name : "Team 1"}</p>
            <p>
              {props.isSingles
                ? playerOneScore
                : playerOneScore + playerTwoScore}
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
        <PlayerNames>
          <p>Please enter the players names:</p>
          <div>
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
          </div>
        </PlayerNames>
      </Side>
      <Side padding="1rem" color="white" width="30vw" alignItems="flex-start">
        <ButtonDiv onClick={() => props.switchMode()}>
          {props.isSingles ? "Playing doubles?" : "Playing singles?"}
          <IconDiv width="4rem">
            <ShuttleIcon>{shuttle}</ShuttleIcon>
            <ShuttleIcon display={props.isSingles ? "inline" : "none"}>
              {shuttle}
            </ShuttleIcon>
          </IconDiv>
        </ButtonDiv>
        <ButtonDiv onClick={() => props.resetMatch()}>
          Reset Match <IconDiv>{handshake}</IconDiv>
        </ButtonDiv>
      </Side>
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
    resetMatch: () => dispatch(resetMatch()),
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
