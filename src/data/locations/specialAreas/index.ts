import { GameState } from '../../../types/game';
import { mechanicalStates } from './mechanical';
import { ritualStates } from './ritual';
import { secretStates } from './secret';

export const specialAreas: Record<string, GameState> = {
  ...mechanicalStates,
  ...ritualStates,
  ...secretStates
};