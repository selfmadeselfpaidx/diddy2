export interface GameState {
  id: string;
  text: string;
  choices: Choice[];
  isEnding?: boolean;
}

export interface Choice {
  text: string;
  nextState: string;
}

export interface GameContextType {
  currentState: GameState;
  handleChoice: (nextState: string) => void;
}