const playerFactory = (active, board, placedShips = null, AI = null) => {
  const sunkShips = () => {
    if (placedShips === null) return placedShips;

    let n = 0;
    for (let i = 0; i < placedShips.length; i++) {
      if (typeof placedShips[i] === 'object' && placedShips[i].isSunk()) n++;
    }
    return n;
  };
  return {
    active, board, placedShips, AI, sunkShips,
  };
};

export default playerFactory;
