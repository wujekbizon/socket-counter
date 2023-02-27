import React from 'react';
import Settings from './components/Settings/Settings';
import Card from './components/PlayerCard/Card';
import Timer from './components/Timer/Timer';

const App = () => {
  return (
    <main className="app">
      <Timer />
      <Card />
      <Settings />
    </main>
  );
};
export default App;
