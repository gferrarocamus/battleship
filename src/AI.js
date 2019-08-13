import { randomCoordinates } from './utilities';

const initialTargetData = {
  coordinates: [],
  isHorizontal: null,
  isSunk: null,
}

const AI = (targetData = initialTargetData, pastMoves = []) => {
  const validMove = (row, col) => {
    const pastMovesIndex = pastMoves.findIndex(
      (arr) => arr[0] === row && arr[1] === col,
    );
    if (pastMovesIndex === -1) return true;
    return false;
  };

  const followUpCoordinates = () => {
    if (targetData.coordinates.length === 0) return null;

    const pair = [...targetData.coordinates].pop();
    const row = pair[0];
    const col = pair[1];
    const possibleRows = [row + 1, row - 1].filter(
      (candidate) => candidate > -1 && candidate < 10,
    );
    const possibleCols = [col + 1, col - 1].filter(
      (candidate) => candidate > -1 && candidate < 10,
    );

    for (let i = 0; i < possibleRows.length; i++) {
      if (validMove(possibleRows[i], col)) {
        return [possibleRows[i], col];
      }
    }
    for (let j = 0; j < possibleCols.length; j++) {
      if (validMove(row, possibleCols[j])) {
        return [row, possibleCols[j]];
      }
    }
    return false;
  };

  const validRandomCoordinates = () => {
    while (true) {
      const coordinates = randomCoordinates();
      if (validMove(coordinates[0], coordinates[1])) return coordinates;
    }
  };

  const getCoordinates = () => {
    console.log(targetData.isHorizontal)

    const followUp = followUpCoordinates();
    if (followUp === false || followUp === null) return validRandomCoordinates();
    return followUp;
  };

  const learn = (coordinates, result) => {
    const prevCoordinates = [...targetData.coordinates].pop() || null;
    
    if (result === 'hit') {
      targetData.coordinates.push(coordinates);
      if (prevCoordinates !== null) {
        if (coordinates[0] === prevCoordinates[0]) {
          targetData.isHorizontal = true;
        } else if (coordinates[1] === prevCoordinates[1]) {
          targetData.isHorizontal = false;
        }
      }
    } else if (prevCoordinates !== null) {
      if (coordinates[0] === prevCoordinates[0]) {
        targetData.isHorizontal = false;
      } else if (coordinates[1] === prevCoordinates[1]) {
        targetData.isHorizontal = true;
      }
    }
  };

  return {
    targetData,
    pastMoves,
    getCoordinates,
    learn,
  };
};

export default AI;
