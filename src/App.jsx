/** @format */

import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [player, setPlayer] = useState(true);
  const [xSel, setXSel] = useState([]);
  const [ySel, setYSel] = useState([]);
  function amClicked({ target }) {
    setPlayer(!player);
    target.classList.add(player ? 'x-play' : 'y-play');
    if (target.classList.contains('cell')) {
      target.style.pointerEvents = 'none';
    }
    console.log(player);
    const value = target.getAttribute('game-data');
    player ? xSel.push(value) : ySel.push(value);
    console.log(xSel, ySel);
  }
  useEffect(() => {
    window.addEventListener('click', amClicked);
    return () => {
      window.removeEventListener('click', amClicked);
    };
  }, [player]);

  return (
    <div className="game">
      <div className="board">
        <div className="cell" game-data="1"></div>
        <div className="cell" game-data="2"></div>
        <div className="cell" game-data="3"></div>
        <div className="cell" game-data="4"></div>
        <div className="cell" game-data="5"></div>
        <div className="cell" game-data="6"></div>
        <div className="cell" game-data="7"></div>
        <div className="cell" game-data="8"></div>
        <div className="cell" game-data="9"></div>
      </div>
    </div>
  );
}

export default App;
