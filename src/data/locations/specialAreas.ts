import { GameState } from '../../types/game';

export const specialAreas: Record<string, GameState> = {
  mechanical_room: {
    id: 'mechanical_room',
    text: "You find an old control room with still-functioning machinery. Multiple screens show various tunnel sections. A large lever is marked 'Emergency Containment' and another 'Tunnel Flood System.'",
    choices: [
      { text: "Pull containment lever", nextState: "containment_sequence" },
      { text: "Activate flood system", nextState: "flood_tunnels" },
      { text: "Check security feeds", nextState: "security_center" }
    ]
  },
  cultist_ceremony: {
    id: 'cultist_ceremony',
    text: "You discover robed figures performing a ritual. They seem to be strengthening magical seals. Your crystal resonates with their chants. They haven't noticed you yet.",
    choices: [
      { text: "Join the ceremony", nextState: "join_cultists" },
      { text: "Disrupt the ritual", nextState: "ritual_sabotage" },
      { text: "Observe silently", nextState: "ritual_learning" }
    ]
  },
  crystal_defense: {
    id: 'crystal_defense',
    text: "The crystal blazes with brilliant light! The creatures shriek and retreat, but the crystal's power is draining quickly. You notice a sealed door behind where the creatures were.",
    choices: [
      { text: "Rush through the door", nextState: "ancient_chamber" },
      { text: "Follow the creatures", nextState: "creature_lair" },
      { text: "Retreat while you can", nextState: "tactical_retreat" }
    ]
  },
  security_center: {
    id: 'security_center',
    text: "The security center reveals the true scope of the tunnel network. Multiple containment breaches are active. You spot a massive shape moving through the lower levels.",
    choices: [
      { text: "Trigger facility lockdown", nextState: "lockdown_sequence" },
      { text: "Call for emergency help", nextState: "emergency_protocol" },
      { text: "Download security data", nextState: "ending_with_proof" }
    ]
  },
  ancient_chamber: {
    id: 'ancient_chamber',
    text: "You enter a vast chamber with an enormous sealed sarcophagus. Your crystal nearly pulls itself toward it. Ancient machines hum with power. A control panel shows containment status at critical levels.",
    choices: [
      { text: "Strengthen the seal", nextState: "ending_hero" },
      { text: "Open the sarcophagus", nextState: "ending_catastrophe" },
      { text: "Destroy the machines", nextState: "ending_chaos" }
    ]
  }
};