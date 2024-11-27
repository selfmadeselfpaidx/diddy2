import { GameState } from '../../../types/game';
import { entranceStates } from './entrance';
import { equipmentStates } from './equipment';
import { noticeStates } from './notice';

export const startArea: Record<string, GameState> = {
  start: {
    id: 'start',
    text: "You stand before the infamous Diddy Tunnels. Local legends speak of students who entered but never returned. The rusty metal door creaks in the cold wind, and your flashlight flickers ominously.",
    choices: [
      { text: "Enter the tunnels", nextState: "entrance" },
      { text: "Check your equipment", nextState: "equipment" },
      { text: "Read the notice board", nextState: "notice_board" }
    ]
  },
  ...entranceStates,
  ...equipmentStates,
  ...noticeStates
};