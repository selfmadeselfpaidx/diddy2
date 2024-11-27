import { GameState } from '../../../types/game';

export const maintenanceStates: Record<string, GameState> = {
  maintenance_tunnel: {
    id: 'maintenance_tunnel',
    text: "The maintenance tunnel is narrow but well-preserved. You find old tools and a worker's journal. The last entry mentions 'containing the ancient one' and 'sacrificial chambers.'",
    choices: [
      { text: "Read the journal", nextState: "journal_discovery" },
      { text: "Follow tunnel deeper", nextState: "maintenance_deep" },
      { text: "Return to entrance", nextState: "entrance_with_map" }
    ]
  },
  maintenance_deep: {
    id: 'maintenance_deep',
    text: "Deeper in the maintenance area, you find a hidden workshop. Ancient and modern tools lie scattered about. A partially assembled device pulses with strange energy.",
    choices: [
      { text: "Examine the device", nextState: "device_study" },
      { text: "Search the workshop", nextState: "workshop_search" },
      { text: "Continue deeper", nextState: "maintenance_secret" }
    ]
  },
  journal_discovery: {
    id: 'journal_discovery',
    text: "The journal reveals a horrifying truth: the tunnels were built to contain an ancient entity. The maintenance workers were actually cultists maintaining the seals.",
    choices: [
      { text: "Continue exploring", nextState: "maintenance_deep" },
      { text: "Search for more journals", nextState: "archive_room" },
      { text: "Escape with evidence", nextState: "ending_with_knowledge" }
    ]
  }
};