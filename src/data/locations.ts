import { GameState } from '../types/game';
import { startArea } from './locations/startArea';
import { mainArea } from './locations/mainArea';
import { specialAreas } from './locations/specialAreas';

export const locations: Record<string, GameState> = {
  ...startArea,
  ...mainArea,
  ...specialAreas
};