import gameboardFactory from '../src/js/gameboard';

test('board can place ships', () => {
  const gameboard = gameboardFactory();
  const ship = {
    cells: [],
    length: 4,
    isHorizontal: true,
  };
  gameboard.placeShip(ship, [0, 0]);
  for (let i = 0; i < gameboard.matrix.length; i++) {
    for (let j = 0; j < gameboard.matrix.length; j++) {
      if (i === 0 && j < 4) {
        expect(typeof gameboard.matrix[i][j]).toBe('object');
      } else {
        expect(gameboard.matrix[i][j]).toBe(' ');
      }
    }
  }
});

test('board cannot place ships out of bounds', () => {
  const gameboard = gameboardFactory();
  const ship = {
    cells: [],
    length: 4,
    isHorizontal: true,
  };
  gameboard.placeShip(ship, [0, 7]);
  for (let i = 0; i < gameboard.matrix.length; i++) {
    for (let j = 0; j < gameboard.matrix.length; j++) {
      expect(gameboard.matrix[i][j]).toBe(' ');
    }
  }
});

test('board can receive attack on a ship', () => {
  const gameboard = gameboardFactory();
  const ship = {
    cells: [],
    length: 4,
    isHorizontal: true,
    hit: jest.fn(),
  };
  gameboard.placeShip(ship, [0, 0]);
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(ship.hit).toHaveBeenCalled();
});

test('board can receive attack on an empty cell', () => {
  const gameboard = gameboardFactory();
  expect(gameboard.receiveAttack(0, 0)).toEqual(false);
});

test('all ships are sunk', () => {
  const gameboard = gameboardFactory();
  const ship1 = {
    cells: [],
    length: 1,
    isHorizontal: true,
    isSunk: jest.fn(() => true),
  };
  const ship2 = {
    cells: [],
    length: 1,
    isHorizontal: true,
    isSunk: jest.fn(() => true),
  };
  gameboard.placeShip(ship1, [0, 0]);
  gameboard.placeShip(ship2, [3, 7]);
  expect(gameboard.allSunk()).toBe(true);
});

test('not all ships are sunk', () => {
  const gameboard = gameboardFactory();
  const ship1 = {
    cells: [],
    length: 1,
    isHorizontal: true,
    isSunk: jest.fn(() => true),
  };
  const ship2 = {
    cells: [],
    length: 1,
    isHorizontal: true,
    isSunk: jest.fn(() => false),
  };
  gameboard.placeShip(ship1, [0, 0]);
  gameboard.placeShip(ship2, [3, 7]);
  expect(gameboard.allSunk()).toBe(false);
});
