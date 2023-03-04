import React, { useEffect } from 'react';
import Settings from './components/Settings/Settings';
import Card from './components/PlayerCard/Card';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';

const App = () => {
  const isMenuOpen = useSelector((state) => state.modal.isMenuOpen);
  const players = useSelector((state) => state.player.players);

  useEffect(() => {
    if (window.__args.debug && window.__args.config.build_redirect) {
      window.location = window.__args.config.build_redirect;
      console.log(window.location);
      console.log(window.__args);
    }
  }, []);

  return (
    <main className="app">
      <div className="settings_container">
        <Settings />
      </div>

      <div className="cards_contanier">
        {players.map((player) => (
          <Card {...player} key={player.playerId} />
        ))}
      </div>
      {isMenuOpen && <Modal />}
    </main>
  );
};
export default App;
