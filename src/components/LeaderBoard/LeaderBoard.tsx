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
    <ul className="menu p-4 shadow-md text-base-content text-opacity-40 bg-base-100">
      <li className="menu-title">
        <span>Leader board</span>
      </li>
      <li className="capitalize text-primary px-4">{category}</li>
      <li className="flex flex-row text-xs font-medium text-gray-900">
        <span className="flex flex-1 flex-row">Player</span>
        <span className="flex flex-1 flex-row">Appearances</span>
        <span className="flex flex-1 flex-row">Goals</span>
        <span className="flex flex-1 flex-row">Average</span>
      </li>
      {topPlayersByCategory.map(
        ({ position, fullName, appearances, average }, index, items) => (
          <li
            key={index}
            className="flex flex-row text-sm py-3 px-4 m-0 border-b-2 text-gray-600">
            <p className="flex flex-1 flex-col p-0">
              <span className="text-xs text-gray-400">{position}</span>
              <span>{fullName}</span>
            </p>
            <span className="flex flex-1 flex-row justify-end p-0">{appearances}</span>
            <span className="flex flex-1 flex-row justify-end p-0">
              {items[index][category]}
            </span>
            <span className="flex flex-1 flex-row justify-end p-0">{average}</span>
          </li>
        ),
      )}
    </ul>
  );
}

export default LeaderBoard;
