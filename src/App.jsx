import React, { useState } from 'react';
import Settings from './components/Settings/Settings';
import Card from './components/PlayerCard/Card';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';

const App = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="app">
      <Timer />

      <Card playerName={playerName} className="direction" />
      <Settings setIsOpen={setIsOpen} />
      <Card playerName={player2Name} />
      {isOpen && (
        <Modal
          setPlayer2Name={setPlayer2Name}
          setPlayerName={setPlayerName}
          player2Name={player2Name}
          playerName={playerName}
        />
      )}
    </main>
  );
};
export default App;
