import React from 'react';
import { GameText } from './GameText';
import { ChoiceList } from './ChoiceList';
import { GameState } from '../../types/game';

interface GameContainerProps {
  currentState: GameState;
  onChoiceSelected: (nextState: string) => void;
}

export const GameContainer: React.FC<GameContainerProps> = ({ currentState, onChoiceSelected }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <GameText text={currentState.text} />
      <ChoiceList 
        choices={currentState.choices}
        onChoiceSelected={onChoiceSelected}
      />
    </div>
  );
};