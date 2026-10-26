import React from 'react';
import mockedPlayerImage from '../../assets/football_profile_photo.png';

// Types...
import { Player } from '../../types/Player';

export interface PlayerCardPropsInterface {
  player: Player;
}

function PlayerCard(props: PlayerCardPropsInterface): React.JSX.Element {
  const {
    player: { fullName, number, position, country, appearances, goals, assists },
  } = props;

  return (
    <article className="card h-full rounded-none bg-base-100 text-base-content shadow-md">
      <div className="card-body gap-4 p-5">
        <div className="flex min-w-0 items-center gap-4">
          <div className="avatar">
            <div className="h-14 w-14 shrink-0 rounded-full shadow">
              <img src={mockedPlayerImage} alt="" />
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-sm text-base-content/70">#{number}</p>
            <h2 className="card-title block truncate text-lg" title={fullName}>
              {fullName}
            </h2>
            <p className="text-sm text-base-content/70">{position}</p>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-gray-600">
          <dt>Nationality</dt>
          <dd className="truncate text-right font-bold" title={country}>
            {country}
          </dd>
          <dt>Appearances</dt>
          <dd className="text-right font-bold">{appearances}</dd>
          <dt>Goals</dt>
          <dd className="text-right font-bold">{goals}</dd>
          <dt>Assists</dt>
          <dd className="text-right font-bold">{assists}</dd>
        </dl>
      </div>
    </article>
  );
}

export default PlayerCard;
