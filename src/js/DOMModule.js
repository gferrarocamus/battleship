import BlackShip from '../img/ship-black.svg';
import BrownShip from '../img/ship-brown.svg';
import BlueShip from '../img/ship-blue.svg';

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

  const updateShipIcons = (container, player, playerWon) => {
    const sunkCount = +player.sunkShips();
    if (sunkCount < 1 && !playerWon) return;

    let start;
    let end;
    let src;
    const divs = container.children;

    if (playerWon) {
      start = 9;
      end = sunkCount - 1;
      src = BlueShip;
    } else {
      start = sunkCount - 1;
      end = sunkCount - 2;
      src = BrownShip;
    }

    for (let i = start; i > end; i--) {
      const div = [...divs][i];
      div.src = src;
    }
  };

  const highlightUnsunk = (playerShips, computerShips) => {
    const computerBoard = document.getElementsByClassName('computerBoard');
    const computerShipCoords = [].concat(...computerShips.map((ship) => ship.cells));

    const computerDivs = [...computerBoard].filter((div) => {
      const row = +div.getAttribute('data-index')[0];
      const col = +div.getAttribute('data-index')[1];
      const index = computerShipCoords.findIndex(
        (cell) => cell[0] === row && cell[1] === col,
      );
      if (index === -1) return false;
      return true;
    });

    const playerDivs = [].concat(...playerShips.map((ship) => {
      const divs = [];
      for (let i = 0; i < ship.cells.length; i++) {
        const div = document.getElementById(
          `${ship.cells[i][0]}${ship.cells[i][1]}`,
        );
        divs.push(div);
      }
      return divs;
    }));

    const targetDivs = [...playerDivs, ...computerDivs].filter((div) => div !== null);

    targetDivs.forEach((div) => {
      if ([...div.classList].indexOf('hit') === -1
      && [...div.classList].indexOf('miss') === -1) {
        addClassToDiv(div, 'gameOver');
      }
    });
  };

  const gameOverMessage = (playerWon) => {
    if (playerWon) return 'Human Player Wins!';
    return 'The Machine Wins!';
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

  const setButtonDisabled = (id, bool) => {
    document.getElementById(id).disabled = bool;
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
    highlightUnsunk,
    gameOverMessage,
    displayRestartButton,
    setButtonDisabled,
  };
})();

export default DOMModule;
