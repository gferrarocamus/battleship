import playerFactory from '../src/player';

test('sunkShips() returns null after initializing player', () => {
  const player = playerFactory(true, {});
  expect(player.sunkShips()).toBe(null);
});

test('sunkShips() returns the right number', () => {
  const ships = [
    {
      isSunk: jest.fn(() => true),
    },
    {
      isSunk: jest.fn(() => false),
    },
    {
      isSunk: jest.fn(() => true),
    },
  ];
  const player = playerFactory(true, {}, ships);
  expect(player.sunkShips()).toBe(2);
});
