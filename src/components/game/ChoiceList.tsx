import React from 'react';
import { Choice } from '../../types/game';
import { Button } from '../ui/Button';

interface ChoiceListProps {
  choices: Choice[];
  onChoiceSelected: (nextState: string) => void;
}

export const ChoiceList: React.FC<ChoiceListProps> = ({ choices, onChoiceSelected }) => {
  return (
    <div className="flex flex-col space-y-4">
      {choices.map((choice, index) => (
        <Button
          key={index}
          onClick={() => onChoiceSelected(choice.nextState)}
          variant={choice.text === "Play Again" ? "secondary" : "primary"}
        >
          {choice.text}
        </Button>
      ))}
    </div>
  );
};