import React from 'react';
import { Header } from './components/layout/Header';
import { GameContainer } from './components/game/GameContainer';
import { EndingMessage } from './components/layout/EndingMessage';
import { useGameState } from './hooks/useGameState';

function App() {
  const { currentState, handleChoice } = useGameState();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <Header />
        <GameContainer 
          currentState={currentState}
          onChoiceSelected={handleChoice}
        />
        {currentState.isEnding && <EndingMessage />}
      </div>
    </div>
  );
}

export default App;