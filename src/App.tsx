import React from 'react';
import './reset.css';
import './App.css';

import footballTeamLogo from './assets/football_team_logo.png';

// Components...
import PositionList from './components/PositionList/PositionList';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import PlayerCard from './components/PlayerCard/PlayerCard';
import Stat from './components/Stat/Stat';

// Data...
import positionsData from './data/positions.json';
import playersData from './data/players.json';
import { Player } from './types/Player';
import { PositionName } from './types/Position';

const PlayerCollection = playersData as Player[];
const positions = positionsData.map(({ position }) => position as PositionName);

function App(): React.JSX.Element {
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl bg-indigo-100 p-4 text-gray-700 sm:p-6">
      <div className="navbar mb-4 bg-base-100 text-gray-700 shadow-sm">
        <div className="flex-none lg:flex">
          <img src={footballTeamLogo} alt="football-team-logo" />
        </div>
        <div className="flex-1 px-2 mx-2 lg:flex">
          <span className="text-2xl font-medium">Football Squad</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(19rem,1fr)_minmax(0,2fr)]">
        <aside className="min-w-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <LeaderBoard players={PlayerCollection} category="goals" top={5} />
            <PositionList
              positions={positions.map((position) => ({
                position,
                numOfPlayers: PlayerCollection.filter(
                  (player) => player.position === position,
                ).length,
              }))}
            />
          </div>
        </aside>
        <main className="min-w-0">
          <div className="mb-4 grid grid-cols-1 divide-y divide-gray-300 bg-base-100 shadow-md sm:grid-cols-3 sm:divide-x sm:divide-y-0">
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            {PlayerCollection.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
