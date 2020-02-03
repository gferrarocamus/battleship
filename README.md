# Battleship

This is a single-player game of [Battleship](https://en.wikipedia.org/wiki/Battleship_(game)) built entirely with JavaScript, CSS, and HTML, tested with Jest, and bundled with Webpack.

## Background & Description

Based on our [previous project](https://github.com/1ba1/battleship), this new version introduces an enhanced AI that is smart enough to try adjacent slots after getting a hit, as well as UI/UX improvements.

## Features

- Each player gets 10 ships of four different sizes:

     | Size | Amount |
     |--------|---------|
     | 1 slot | 4 ships |
     | 2 slots| 3 ships |
     | 3 slots| 2 ships |
     | 4 slots| 1 ship |

- Before starting the game, the player can take control over their grid by choosing between different semi-random combinations of ship placements.
- Generated ship placements never overlap as per game rules.
- Generated ship placements are never ajdacent in the spirit of fairness.
- The AI will try to sink the player's ships by targeting adjacent slots after a successful attack.
- The updated UX shows icons representing the status of all the players' ships throughout the game.

## Future Features

- Support drag and drop for custom ship placement.
- Add visual indicators on the grid after a ship has been sunk.

## Install

To run locally, make sure you have [Node.js](https://nodejs.org/) installed.

After cloning the repo, install the necessary packages inside the project directory:

```
$ npm install
```

Run the test suite to confirm everything is working:

```
$ npm test
```

You're ready to start developing.

Build any changes to the project with `$ npx webpack`, or have all changes built automatically by running `$ npx webpack --watch` in a separate terminal as you develop.

## Live Version

You can play it in the browser [here](https://gferrarocamus.github.io/battleship).

## License

MIT © 2020 [Giuliana Ferraro](https://www.giulianaferraro.com/) <[giuliana.ferraro.dev@gmail.com](mailto:giuliana.ferraro.dev@gmail.com)>

---

![Battleship Demo](/demo/battleship-demo.png)
