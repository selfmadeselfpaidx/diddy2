import { GameState } from '../../../types/game';

export const entranceStates: Record<string, GameState> = {
  entrance: {
    id: 'entrance',
    text: "The tunnel entrance looms before you, its metal door groaning in the wind. The air feels thick with an unseen presence. Your flashlight beam reveals ancient markings on the walls.",
    choices: [
      { text: "Step inside", nextState: "entrance_main" },
      { text: "Examine the markings", nextState: "entrance_markings" },
      { text: "Check surroundings", nextState: "entrance_area" }
    ]
  },
  entrance_main: {
    id: 'entrance_main',
    text: "Inside, the tunnel splits into three paths. The left path slopes downward, the right follows old train tracks, and the middle path seems to lead to a maintenance area.",
    choices: [
      { text: "Take the descending path", nextState: "deep_tunnel" },
      { text: "Follow the train tracks", nextState: "railway" },
      { text: "Enter maintenance area", nextState: "maintenance_tunnel" }
    ]
  },
  entrance_markings: {
    id: 'entrance_markings',
    text: "The markings appear to be a mix of ancient symbols and modern graffiti. Among them, a recent message reads: 'The crystal resonates with their presence. Don't let them see you.'",
    choices: [
      { text: "Enter the tunnel", nextState: "entrance_main" },
      { text: "Search for more clues", nextState: "entrance_search" },
      { text: "Return to equipment check", nextState: "equipment" }
    ]
  },
  entrance_area: {
    id: 'entrance_area',
    text: "Around the entrance, you find discarded equipment: a broken camera, torn backpack, and scattered research notes. Some pages mention 'containment protocols' and 'dimensional anomalies.'",
    choices: [
      { text: "Collect the research notes", nextState: "entrance_notes" },
      { text: "Enter the tunnel", nextState: "entrance_main" },
      { text: "Examine the camera", nextState: "entrance_camera" }
    ]
  }
};