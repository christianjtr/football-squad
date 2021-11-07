import React from 'react';

// Types...
import { Position } from '../../types/Position';

export interface PositionListPropsInterface {
  positions: Position[];
}

function PositionList(props: PositionListPropsInterface): JSX.Element {
  const { positions } = props;

  return (
    <ul
      className="menu p-4 shadow-md text-gray-600 bg-base-100"
      style={{ height: 'fit-content' }}>
      <li className="menu-title">
        <span>Players per position</span>
      </li>
      {positions.map(({ id, position, numOfPlayers }) => (
        <li key={id} className="flex flex-row justify-between items-center">
          <span>{position}</span>
          <div className="badge w-7 badge-primary items-center">{numOfPlayers}</div>
        </li>
      ))}
    </ul>
  );
}

export default PositionList;
