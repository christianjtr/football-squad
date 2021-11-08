import React from 'react';
import './App.css';

import footballTeamLogo from './assets/football_team_logo.png';

// Components...
import PositionList from './components/PositionList/PositionList';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import PlayerCard from './components/PlayerCard/PlayerCard';
import Stat from './components/Stat/Stat';

// Data...
import PositionCollection from './data/positions.json';
import PlayerCollection from './data/players.json';

function App(): JSX.Element {
  return (
    <div className="container p-5 bg-indigo-100">
      <div className="navbar mb-2 bg-base-100 text-gray-700 mb-4">
        <div className="flex-none lg:flex">
          <img src={footballTeamLogo} alt="football-team-logo" />
        </div>
        <div className="flex-1 px-2 mx-2 lg:flex">
          <span className="text-2xl font-medium">Football Squad</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className="md:col-span-2 sm:col-span-1">
          <div className="grid xl:grid-rows-2 lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-1 gap-4">
            <LeaderBoard players={PlayerCollection} category="goals" top={5} />
            <PositionList positions={PositionCollection} />
          </div>
        </div>
        <div className="md:col-span-4 sm:col-span-1">
          <div className="shadow-md mb-4 rounded-none grid grid-rows-1 md:flex-none md:flex-nowrap sm:flex sm:flex-wrap">
            <Stat title="Total of players" value={PlayerCollection.length} />
            <Stat
              title="Total of goals"
              value={PlayerCollection.reduce((acc, item) => item.goals + acc, 0)}
            />
            <Stat
              title="Total of assists"
              value={PlayerCollection.reduce((acc, item) => item.assists + acc, 0)}
            />
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
            {PlayerCollection.map((player, index) => (
              <PlayerCard key={index} player={player} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
