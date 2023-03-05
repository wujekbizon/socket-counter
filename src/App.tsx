import { useEffect } from 'react';
import Settings from './components/Settings/Settings';
import Card from './components/PlayerCard/Card';
import Modal from './components/Modal/Modal';
import { useTypedSelector } from './hooks/useTypedSelector';

import os from 'socket:os';

let window: Window & typeof globalThis;

const App = () => {
  const isMenuOpen = useTypedSelector((state) => state.modal.isMenuOpen);
  const players = useTypedSelector((state) => state.player.players);

  // useEffect(() => {
  //   if (window.__args.debug && window.__args.config.build_redirect) {
  //     window.location = window.__args.config.build_redirect;
  //     console.log(window.location);
  //     console.log(window.__args);
  //   }
  // }, []);

  // console.log(os.platform());

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
