import { useEffect, useState, useRef } from 'react'
import CardsArray from './components/CardsArray';
import shuffleCards from './components/Shuffle';
import Card from './components/card';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Play the Card Matching Game</h3>
        <div>
          Find two matching cards to make them vanish.
        </div>
      </header>
      <div className="container">

      </div>
      <footer>
        <div className='score'>
          <div className='moves'>
            <span className='bold'>Moves:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className='high-score'>
              <span className='bold'>Best Score:</span> {bestScore}
              </div>
          )}
        </div>
        <div className='restart'>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
