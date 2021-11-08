import React from 'react';

// Types...
import { Player } from '../../types/Player';
import { StatCategory } from '../../types/Stats';

export interface LeaderBoardPropsInterface {
  players: Player[];
  category: StatCategory;
  top?: 3 | 5;
}

function LeaderBoard(props: LeaderBoardPropsInterface): JSX.Element {
  const { players, category, top } = props;

  const DEFAULT_TOP = 3;

  const topPlayersByCategory = players
    .sort((a, b) => b[category] - a[category])
    .slice(0, top || DEFAULT_TOP)
    .map((player) => ({
      ...player,
      average: (player[category] / player.appearances).toFixed(2) || 0,
    }));

  return (
    <ul className="menu p-4 shadow-md text-base-content bg-base-100">
      <li className="menu-title">
        <span>Leader board</span>
      </li>
      <li className="w-full capitalize text-primary px-4">{category}</li>
      <li className="grid grid-cols-4 text-sm text-gray-900">
        <span>Player</span>
        <span>Appear.</span>
        <span>Goals</span>
        <span>Average</span>
      </li>
      {topPlayersByCategory.map(({ fullName, appearances, average }, index, items) => (
        <li key={index} className="grid grid-cols-4 text-sm border-b-2 text-gray-600">
          <span>{fullName}</span>
          <span className="flex justify-end">{appearances}</span>
          <span className="flex justify-end">{items[index][category]}</span>
          <span className="flex justify-end">{average}</span>
        </li>
      ))}
    </ul>
  );
}

export default LeaderBoard;
