import { GameState } from '../types/game';
import { locations } from './locations';
import { endings } from './endings';

export const gameStates: Record<string, GameState> = {
  ...locations,
  ...endings
};