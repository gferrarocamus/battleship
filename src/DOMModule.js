import BlackShip from './img/ship-black.svg';
import BrownShip from './img/ship-brown.svg';

const DOMModule = (() => {
  const displayBoard = (parent, matrix = null) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement('div');
        if (matrix === null) {
          div.setAttribute('data-index', `${i}${j}`);
          div.classList.add('computerBoard');
        } else {
          div.setAttribute('id', `${i}${j}`);
          div.classList.add('playerBoard');
          if (matrix[i][j] !== ' ' && matrix[i][j] !== 'M') {
            div.classList.add('ship');
          }
        }
        parent.appendChild(div);
      }
    }
  };

  const displayStats = (div, player) => {
    const sunk = player.sunkShips();
    div.innerHTML = `${sunk}/10 Ships Sunk`;
  };

  const displayShips = (ships) => {
    ships.forEach((ship) => {
      for (let i = 0; i < ship.cells.length; i++) {
        const div = document.getElementById(
          `${ship.cells[i][0]}${ship.cells[i][1]}`,
        );
        if (i === 0) div.classList.add('first-cell');
        if (i === ship.cells.length - 1) div.classList.add('last-cell');
        ship.isHorizontal
          ? div.classList.add('horizontal')
          : div.classList.add('vertical');
      }
    });
  };

  const addClassToDiv = (div, className) => {
    div.classList.add(className);
  };

  const cleanBoard = (query, id) => {
    const children = document.querySelectorAll(query);
    const parent = document.getElementById(id);

    [...children].forEach((child) => {
      parent.removeChild(child);
    });
  };

  const displayMessage = (msg) => {
    const message = document.getElementById('message');
    message.textContent = msg;
  };

  const displayShipIcons = (container) => {
    for (let i = 0; i < 10; i++) {
      const ship = new Image();
      ship.src = BlackShip;
      ship.classList.add('shipIcon');
      container.appendChild(ship);
    }
  };

  const updateShipIcons = (container, player) => {
    if (+player.sunkShips() < 1) return;

    const index = +player.sunkShips() - 1;
    const divs = container.children;
    const div = [...divs][index];
    div.src = BrownShip;
  };

  const displayRestartButton = () => {
    const button = document.getElementById('restart');
    button.classList.remove('hide');
    button.addEventListener(
      'click',
      () => {
        location.reload();
      },
      false,
    );
  };

  const gameOverMessage = (computerLost) => {
    if (computerLost) return 'Human Player Wins!';
    return 'The Machine Wins!';
  };

  return {
    displayBoard,
    displayShips,
    addClassToDiv,
    cleanBoard,
    displayMessage,
    displayStats,
    displayShipIcons,
    updateShipIcons,
    displayRestartButton,
    gameOverMessage,
  };
})();

export default DOMModule;
