import React, { useState } from 'react';
import Settings from './components/Settings/Settings';
import Card from './components/PlayerCard/Card';
import Timer from './components/Timer/Timer';

const App = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
  return (
    <main className="app">
      <Timer />
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <input
        type="text"
        value={player2Name}
        onChange={(e) => setPlayer2Name(e.target.value)}
      />
      <Card playerName={playerName} />
      <Card playerName={player2Name} />
      <Settings />
    </main>
  );
};
export default App;
