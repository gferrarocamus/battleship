import { randomCoordinates, blankData } from './utilities';

const AI = (targetData = blankData(), pastMoves = []) => {
  const validMove = (row, col) => {
    const pastMovesIndex = pastMoves.findIndex(
      (arr) => arr[0] === row && arr[1] === col,
    );
    if (pastMovesIndex === -1) return true;
    return false;
  };

  const possibleCoordinates = (coord) => [coord + 1, coord - 1].filter(
    (candidate) => candidate > -1 && candidate < 10,
  );

  const followUpCoordinates = () => {
    // if (targetData.coordinates.length === 0) return null;

    const pair = [...targetData.coordinates].pop();
    const row = pair[0];
    const col = pair[1];

    if (targetData.isHorizontal === null) {
      const possibleCols = possibleCoordinates(col);
      for (let j = 0; j < possibleCols.length; j++) {
        if (validMove(row, possibleCols[j])) {
          return [row, possibleCols[j]];
        }
      }
      const possibleRows = possibleCoordinates(row);
      for (let i = 0; i < possibleRows.length; i++) {
        if (validMove(possibleRows[i], col)) {
          return [possibleRows[i], col];
        }
      }
      return false;
    }

    if (targetData.isHorizontal) {
      const possibleCols = possibleCoordinates(col);
      for (let j = 0; j < possibleCols.length; j++) {
        if (validMove(row, possibleCols[j])) {
          return [row, possibleCols[j]];
        }
      }
    } else {
      const possibleRows = possibleCoordinates(row);
      for (let i = 0; i < possibleRows.length; i++) {
        if (validMove(possibleRows[i], col)) {
          return [possibleRows[i], col];
        }
      }
    }

    return -1;
  };

  const validRandomCoordinates = () => {
    while (true) {
      const coordinates = randomCoordinates();
      if (validMove(coordinates[0], coordinates[1])) return coordinates;
    }
  };

  const getCoordinates = () => {
    if (targetData.coordinates.length === 0) return validRandomCoordinates();

    let followUp = followUpCoordinates();
    
    console.log(targetData.coordinates)
    console.log(followUp)
    
    if (followUp === -1) {
      targetData.coordinates = targetData.coordinates.slice(0, 1);
      followUp = followUpCoordinates();
    }
    if (followUp === false || followUp === -1) {
      console.log("false")
      targetData = blankData();
      return validRandomCoordinates();
    }
    return followUp;
  };

  const learn = (coordinates, result) => {
    const prevCoordinates = [...targetData.coordinates].pop() || null;
    if (prevCoordinates !== null) {
      if (targetData.isHorizontal === null && result === 'hit') {
        // find out if it's horizontal
        if (coordinates[0] === prevCoordinates[0]) {
          targetData.isHorizontal = true;
        } else if (coordinates[1] === prevCoordinates[1]) {
          targetData.isHorizontal = false;
        }
      } else if (targetData.isHorizontal !== null && result === 'miss') {
        // go back to the first hit
        targetData.coordinates = targetData.coordinates.slice(0, 1);
      }
    }
    if (result === 'hit') targetData.coordinates.push(coordinates);
    if (targetData.coordinates.length >= 4) targetData = blankData();
  };

  return {
    pastMoves,
    getCoordinates,
    learn,
  };
};

export default AI;
