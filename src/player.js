const playerFactory = (active, board, placedShips, pastMoves) => {
  const sunkShips = () => {
    let n = 0;
    for (let i = 0; i < placedShips.length; i++) {
      if (typeof placedShips[i] === 'object' && placedShips[i].isSunk()) n++;
    }
    return n;
  }
  return { active, board, placedShips, pastMoves, sunkShips };
};

export default playerFactory;
