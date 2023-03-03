import React, { useEffect, useState } from 'react';
import Settings from './components/Settings/Settings';
import Card from './components/PlayerCard/Card';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';

const App = () => {
  const isMenuOpen = useSelector((state) => state.modal.isMenuOpen);
  const players = useSelector((state) => state.player.players);
  const [startingLife, setStartingLife] = useState(20);

  useEffect(() => {
    if (window.__args.debug && window.__args.config.build_redirect) {
      window.location = window.__args.config.build_redirect;
      console.log(window.location);
      console.log(window.__args);
    }
  }, []);

  return (
    <main className="app">
      <Timer />

      {players.map((player) => (
        <Card {...player} key={player.playerId} />
      ))}
      <Settings />

      {isMenuOpen && (
        <Modal startingLife={startingLife} setStartingLife={setStartingLife} />
      )}
    </main>
  );
};
export default App;
