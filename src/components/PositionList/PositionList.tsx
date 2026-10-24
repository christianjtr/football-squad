import React from 'react';

// Types...
import { Position } from '../../types/Position';

export interface PositionListPropsInterface {
  positions: Position[];
}

function PositionList(props: PositionListPropsInterface): React.JSX.Element {
  const { positions } = props;

  return (
    <ul className="w-full menu h-fit bg-base-100 p-4 text-gray-600 shadow-md">
      <li className="menu-title">
        <span>Players per position</span>
      </li>
      {positions.map(({ position, numOfPlayers }) => (
        <li key={position} className="flex flex-row justify-between items-center">
          <span>{position}</span>
          <div className="badge badge-primary w-7 items-center">{numOfPlayers}</div>
        </li>
      ))}
    </ul>
  );
}

export default PositionList;
