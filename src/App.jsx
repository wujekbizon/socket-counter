import React, { useState } from 'react';
import Settings from './components/Settings/Settings';
import Card from './components/PlayerCard/Card';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';

const App = () => {
  const isMenuOpen = useSelector((state) => state.modal.isMenuOpen);

  const [playerName, setPlayerName] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
  const [startingLife, setStartingLife] = useState(20);
  const [player1_life, setPlayer1Life] = useState(20);
  const [player2_life, setPlayer2Life] = useState(20);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="app">
      <Timer />

      <Card
        playerName={playerName}
        player_life={player1_life}
        setPlayerLife={setPlayer1Life}
        className="direction"
      />
      <Settings setIsOpen={setIsOpen} />
      <Card
        playerName={player2Name}
        player_life={player2_life}
        setPlayerLife={setPlayer2Life}
      />
      {isMenuOpen && (
        <Modal
          setPlayer2Name={setPlayer2Name}
          setPlayerName={setPlayerName}
          player2Name={player2Name}
          playerName={playerName}
          setPlayer1Life={setPlayer1Life}
          setPlayer2Life={setPlayer2Life}
          startingLife={startingLife}
          setStartingLife={setStartingLife}
        />
      )}
    </main>
  );
};
export default App;
