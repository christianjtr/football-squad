export type PositionName = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export interface Position {
  position: PositionName;
  numOfPlayers: number;
}
