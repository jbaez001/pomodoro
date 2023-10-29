/*
Copyright 2021 Juan Baez

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { IPomodoro } from '../../types/pomodoros';
import { PomodoroCard } from './PomodoroCard';
import { usePomodoro } from './usePomodoro';

export const Pomodoro = (props: IPomodoro) => {
  const {
    cardName,
    cardColor,
    cardText,
    cardNameIsChanging,
    onClickStart,
    onClickStop,
    onClickReset,
    onClickComplete,
    onClickClose,
    onCardNameDoubleClick,
    onCardNameChange,
    onCardNameChangeKeyDown
  } = usePomodoro(props);

  return (
    <>
      <PomodoroCard
        cardName={cardName} 
        cardColor={cardColor}
        cardText={cardText}
        cardNameIsChanging={cardNameIsChanging}
        onClickStart={onClickStart}
        onClickStop={onClickStop}
        onClickReset={onClickReset}
        onClickComplete={onClickComplete}
        onClickClose={onClickClose}
        onCardNameDoubleClick={onCardNameDoubleClick}
        onCardNameChange={onCardNameChange}
        onCardNameChangeKeyDown={onCardNameChangeKeyDown}
      />
    </>
  );
};
