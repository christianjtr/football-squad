import React from 'react';
import mockedPlayerImage from '../../assets/football_profile_photo.png';

// Types...
import { Player } from '../../types/Player';

export interface PlayerCardPropsInterface {
  player: Player;
}

function PlayerCard(props: PlayerCardPropsInterface): JSX.Element {
  const {
    player: { fullName, number, position, country, appearances, goals, assists },
  } = props;

  return (
    <div className="card shadow-md compact side bg-base-100 rounded-none">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img src={mockedPlayerImage} alt={`player-image-${number}`} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-base-content">{number}</p>
          <h2 className="card-title">{fullName}</h2>
          <p className="text-base-content text-opacity-40">{position}</p>
        </div>
      </div>
      <div className="card-body text-gray-600">
        <p className="flex">
          <span className="flex-1">Nationality</span>
          <span className="flex-1 text-right font-bold">{country}</span>
        </p>
        <p className="flex">
          <span className="flex-1">Appearances</span>
          <span className="flex-1 text-right font-bold">{appearances}</span>
        </p>
        <p className="flex">
          <span className="flex-1">Goals</span>
          <span className="flex-1 text-right font-bold">{goals}</span>
        </p>
        <p className="flex">
          <span className="flex-1">Assists</span>
          <span className="flex-1 text-right font-bold">{assists}</span>
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
