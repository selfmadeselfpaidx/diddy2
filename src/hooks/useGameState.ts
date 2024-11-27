import { useState } from 'react';
import { GameState } from '../types/game';
import { gameStates } from '../data/gameStates';

export const useGameState = () => {
  const [currentState, setCurrentState] = useState<GameState>(gameStates.start);

  const handleChoice = (nextState: string) => {
    setCurrentState(gameStates[nextState]);
  };

  return {
    currentState,
    handleChoice
  };
};