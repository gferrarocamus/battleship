import shipFactory from './ship';
import playerFactory from './player';
import gameboardFactory from './gameboard';
import DOMModule from './DOMModule';
import { randomBoolean, randomCoordinates } from './utilities';
import './css/style.css';

const gameModule = (() => {
  const initializeBoard = (board) => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    const placedShips = [];

    while (count1 < 4) {
      const ship = shipFactory(1, true);
      const placedShip = board.placeShip(ship, randomCoordinates());
      if (placedShip !== -1) {
        count1++;
        placedShips.push(placedShip);
      }
    }

    while (count2 < 3) {
      const ship = shipFactory(2, randomBoolean());
      const placedShip = board.placeShip(ship, randomCoordinates());
      if (placedShip !== -1) {
        count2++;
        placedShips.push(placedShip);
      }
    }

    while (count3 < 2) {
      const ship = shipFactory(3, randomBoolean());
      const placedShip = board.placeShip(ship, randomCoordinates());
      if (placedShip !== -1) {
        count3++;
        placedShips.push(placedShip);
      }
    }

    while (count4 < 1) {
      const ship = shipFactory(4, randomBoolean());
      const placedShip = board.placeShip(ship, randomCoordinates());
      if (placedShip !== -1) {
        count4++;
        placedShips.push(placedShip);
      }
    }
    return placedShips;
  };

  const checkForWin = (player, computer) => {
    const playerShipResults = document.getElementById('playerShipResults');
    const computerShipResults = document.getElementById('computerShipResults');
    DOMModule.updateShipIcons(playerShipResults, player);
    DOMModule.updateShipIcons(computerShipResults, computer);

    if (player.board.allSunk() || computer.board.allSunk()) {
      player.active = false;
      computer.active = false;
      const msg = computer.board.allSunk() ? 'Human Player Wins!' : 'The Machine Wins!';
      DOMModule.displayMessage(msg);
      const playerStats = document.getElementById('playerStats');
      const computerStats = document.getElementById('computerStats');
      DOMModule.displayStats(playerStats, player);
      DOMModule.displayStats(computerStats, computer);
      DOMModule.displayRestartButton();
      return true;
    }
    return false;
  };

  const attack = (attacker, opponent, row, col, div) => {
    if (!attacker.active) return;

    const result = opponent.board.receiveAttack(row, col) ? 'hit' : 'miss';
    DOMModule.addClassToDiv(div, result);
    if (result === 'miss') {
      attacker.active = false;
      opponent.active = true;
    }
    return result;
  };

  const validMove = (computer, row, col) => {
    const pastMovesIndex = computer.pastMoves.findIndex(
      (arr) => arr[0] === row && arr[1] === col,
    );
    if (pastMovesIndex === -1) return true;
    return false;
  };

  const followUpCoordinates = (computer) => {
    if (computer.lastHit === null) return null;

    const row = computer.lastHit[0];
    const col = computer.lastHit[1];
    const possibleRows = [row + 1, row - 1].filter(
      (candidate) => candidate > -1 && candidate < 10,
    );
    const possibleCols = [col + 1, col - 1].filter(
      (candidate) => candidate > -1 && candidate < 10,
    );

    for (let i = 0; i < possibleRows.length; i++) {
      if (validMove(computer, possibleRows[i], col)) {
        return [possibleRows[i], col];
      }
    }
    for (let j = 0; j < possibleCols.length; j++) {
      if (validMove(computer, row, possibleCols[j])) {
        return [row, possibleCols[j]];
      }
    }
    return null;
  };

  const computerMove = (player, computer) => {
    let row;
    let col;
    let valid = false;
    const followUp = followUpCoordinates(computer);

    if (followUp === null) {
      computer.lastHit = null;
      while (!valid) {
        const coordinates = randomCoordinates();
        row = coordinates[0];
        col = coordinates[1];
        valid = validMove(computer, row, col);
      }
    } else {
      console.log(followUp)
      row = followUp[0];
      col = followUp[1];
    }

    const div = document.getElementById(`${row}${col}`);

    const result = attack(computer, player, row, col, div);

    computer.lastHit = result === 'hit' ? [row, col] : computer.lastHit;

    computer.pastMoves.push([row, col]);

    checkForWin(player, computer);
  };

  const startGame = () => {
    const playerBoardDiv = document.getElementById('playerBoard');
    const computerBoardDiv = document.getElementById('computerBoard');
    const playerBoard = gameboardFactory();
    const computerBoard = gameboardFactory();
    const playerShips = initializeBoard(playerBoard);
    const computerShips = initializeBoard(computerBoard);
    const player = playerFactory(true, playerBoard, playerShips);
    const computer = playerFactory(false, computerBoard, computerShips);
    DOMModule.displayBoard(playerBoardDiv, player.board.matrix);
    DOMModule.displayBoard(computerBoardDiv);
    DOMModule.displayShips(playerShips);

    const callback = (e) => {
      const row = e.target.getAttribute('data-index')[0];
      const col = e.target.getAttribute('data-index')[1];

      attack(player, computer, +row, +col, e.target);

      if (!checkForWin(player, computer)) {
        while (computer.active) {
          computerMove(player, computer);
        }
      }
    };

    const computerBoardDivs = document.querySelectorAll('.computerBoard');
    [...computerBoardDivs].forEach((div) => {
      div.addEventListener('click', callback, false);
      DOMModule.addClassToDiv(div, 'inactive');
    });
  };

  return { startGame };
})();

export default gameModule;

// export const followUpCoordinates = (row, col) => {
//   const possibleRows = [row + 1, row - 1].filter(
//     (candidate) => candidate > -1 && candidate < 10,
//   );
//   const possibleCols = [col + 1, col - 1].filter(
//     (candidate) => candidate > -1 && candidate < 10,
//   );
//   const switchRow = randomBoolean();
//   const rowIndex = Math.round(Math.random() * possibleRows.length - 1);
//   const colIndex = Math.round(Math.random() * possibleCols.length - 1);
//   const x = switchRow ? possibleRows[rowIndex] : row;
//   const y = switchRow ? col : possibleCols[colIndex];
//   return [x, y];
// };