import { GameState } from '../../types/game';

export const startArea: Record<string, GameState> = {
  start: {
    id: 'start',
    text: "You find yourself at the entrance of the infamous Diddy Tunnels. Local legends speak of students who entered but never returned. The rusty metal door creaks in the cold wind, and your flashlight flickers ominously. A worn notice board catches your attention.",
    choices: [
      { text: "Enter the tunnels", nextState: "entrance" },
      { text: "Check your equipment first", nextState: "equipment" },
      { text: "Read the notice board", nextState: "notice_board" }
    ]
  },
  notice_board: {
    id: 'notice_board',
    text: "The notice board contains old missing person reports and a cryptic warning written in what appears to be dried blood: 'The crystal is the key. The shadows hunger.' There's also a fresh map of the tunnel entrance.",
    choices: [
      { text: "Take the map and enter", nextState: "entrance_with_map" },
      { text: "Check your equipment", nextState: "equipment" },
      { text: "Leave this place", nextState: "ending_early_escape" }
    ]
  },
  equipment: {
    id: 'equipment',
    text: "Your backpack contains a failing flashlight, an old map, and a strange crystal you found earlier. Something about the crystal feels important. You also have your phone, but there's no signal here.",
    choices: [
      { text: "Replace flashlight batteries", nextState: "equipment_prepared" },
      { text: "Examine the crystal closer", nextState: "crystal" },
      { text: "Enter tunnels unprepared", nextState: "entrance_unprepared" }
    ]
  },
  equipment_prepared: {
    id: 'equipment_prepared',
    text: "With fresh batteries, your flashlight beam is strong and steady. You feel better prepared for whatever lies ahead. The crystal in your bag seems to pulse in response to the brighter light.",
    choices: [
      { text: "Enter the tunnels confidently", nextState: "entrance_prepared" },
      { text: "Examine the crystal first", nextState: "crystal" }
    ]
  },
  entrance_with_map: {
    id: 'entrance_with_map',
    text: "The fresh map reveals a maintenance tunnel not shown on your old map. This could provide an alternate route. The main tunnel still lies ahead, and you hear faint whispers from both directions.",
    choices: [
      { text: "Take the maintenance tunnel", nextState: "maintenance_tunnel" },
      { text: "Follow the main tunnel", nextState: "entrance" }
    ]
  },
  entrance_unprepared: {
    id: 'entrance_unprepared',
    text: "Your flashlight's weak beam barely penetrates the darkness. Every shadow seems to move, and you're not sure if it's your imagination or the failing light. The tunnels feel more threatening.",
    choices: [
      { text: "Press forward carefully", nextState: "dark_tunnel" },
      { text: "Go back and prepare", nextState: "equipment" }
    ]
  },
  entrance_prepared: {
    id: 'entrance_prepared',
    text: "With your strong flashlight beam, you can see the tunnel clearly. Strange symbols glint on the walls, and you notice two distinct paths: one leading deeper underground, another following an old railway track.",
    choices: [
      { text: "Follow the railway track", nextState: "railway" },
      { text: "Descend deeper", nextState: "deep_tunnel" },
      { text: "Examine the symbols", nextState: "symbols" }
    ]
  }
};