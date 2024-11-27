import { GameState } from '../../../types/game';

export const noticeStates: Record<string, GameState> = {
  notice_board: {
    id: 'notice_board',
    text: "The notice board is covered in missing person reports spanning decades. A recent warning in dried blood reads: 'The crystal is the key. The shadows hunger.' A detailed tunnel map is pinned nearby.",
    choices: [
      { text: "Take the map", nextState: "notice_map" },
      { text: "Study the reports", nextState: "notice_reports" },
      { text: "Leave immediately", nextState: "ending_early_escape" }
    ]
  },
  notice_map: {
    id: 'notice_map',
    text: "The map reveals hidden maintenance tunnels and mysterious marked locations. Someone has circled specific intersections and written 'safe zones' beside them. Recent dates mark certain areas as 'active.'",
    choices: [
      { text: "Enter with map", nextState: "entrance_with_map" },
      { text: "Check equipment first", nextState: "equipment" },
      { text: "Study more details", nextState: "map_details" }
    ]
  },
  notice_reports: {
    id: 'notice_reports',
    text: "The missing person reports show a pattern. Disappearances increase during specific lunar phases. Recent reports mention strange lights and whispers before each incident.",
    choices: [
      { text: "Investigate patterns", nextState: "report_investigation" },
      { text: "Take the map", nextState: "notice_map" },
      { text: "Leave the area", nextState: "ending_early_escape" }
    ]
  }
};