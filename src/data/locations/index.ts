import { GameState } from '../../types/game';
import { startArea } from './startArea';
import { mainArea } from './mainArea';
import { specialAreas } from './specialAreas';

export const locations: Record<string, GameState> = {
  ...startArea,
  ...mainArea,
  ...specialAreas
};