import React from 'react';

// Types...
import { Player } from '../../types/Player';
import { StatCategory } from '../../types/Stats';

export interface LeaderBoardPropsInterface {
  players: Player[];
  category: StatCategory;
  top?: 3 | 5;
}

function LeaderBoard(props: LeaderBoardPropsInterface): React.JSX.Element {
  const { players, category, top } = props;

  const DEFAULT_TOP = 3;
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

  const topPlayersByCategory = [...players]
    .sort((a, b) => b[category] - a[category])
    .slice(0, top ?? DEFAULT_TOP);

  return (
    <ul className="w-full menu p-4 shadow-md text-base-content bg-base-100">
      <li className="menu-title">
        <span>Leader board</span>
      </li>
      <li className="w-full capitalize text-primary px-4">{category}</li>
      <li className="grid grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] gap-2 text-xs font-semibold text-gray-900 sm:text-sm">
        <span>Player</span>
        <span className="text-right">Appear.</span>
        <span className="text-right">{categoryLabel}</span>
        <span className="text-right">Average</span>
      </li>
      {topPlayersByCategory.map((player) => {
        const average =
          category === 'appearances' || player.appearances === 0
            ? '—'
            : (player[category] / player.appearances).toFixed(2);

        return (
          <li
            key={player.id}
            className="grid grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] gap-2 border-b border-gray-300 py-2 text-xs text-gray-600 sm:text-sm">
            <span className="min-w-0 wrap-break-word">{player.fullName}</span>
            <span className="text-right">{player.appearances}</span>
            <span className="text-right">{player[category]}</span>
            <span className="text-right">{average}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default LeaderBoard;
