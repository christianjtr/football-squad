import { Position } from './Position';

export interface Player {
  id: string;
  fullName: string;
  number: number;
  position: Position['position'];
  country: string;
  appearances: number;
  goals: number;
  assists: number;
}
