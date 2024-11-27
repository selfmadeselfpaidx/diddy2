import { GameState } from '../../../types/game';
import { maintenanceStates } from './maintenance';
import { railwayStates } from './railway';
import { tunnelStates } from './tunnels';

export const mainArea: Record<string, GameState> = {
  ...maintenanceStates,
  ...railwayStates,
  ...tunnelStates
};