import { Position } from './Position';

export interface Player {
    fullName: string;
    number: number;
    position: Position['position'];
    country: string;
    appearances: number;
    goals: number;
    assists: number;
}