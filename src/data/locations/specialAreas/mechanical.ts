import { GameState } from '../../../types/game';

export const mechanicalStates: Record<string, GameState> = {
  mechanical_room: {
    id: 'mechanical_room',
    text: "You find an old control room with functioning machinery. Multiple screens show tunnel sections. Two large levers are marked 'Emergency Containment' and 'Tunnel Flood System.'",
    choices: [
      { text: "Pull containment lever", nextState: "containment_sequence" },
      { text: "Activate flood system", nextState: "flood_tunnels" },
      { text: "Check security feeds", nextState: "security_center" }
    ]
  },
  security_center: {
    id: 'security_center',
    text: "The security center reveals the tunnel network's true scope. Multiple containment breaches are active. A massive shape moves through the lower levels.",
    choices: [
      { text: "Trigger lockdown", nextState: "lockdown_sequence" },
      { text: "Call for help", nextState: "emergency_protocol" },
      { text: "Download data", nextState: "ending_with_proof" }
    ]
  }
};