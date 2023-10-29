/*
Copyright 2023 Juan Baez

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

import React, { 
  ChangeEventHandler,
  useContext,
  useEffect, 
  useState 
} from 'react';

import { 
  IPomodoroContext, 
  PomodoroContext 
} from '../../context/PomodoroProvider';
import { IPomodoro } from '../../interfaces/pomodoros';
import { formatTimerString } from '../../utils/FormatTmerString';

// default start time of 25 minutes
const defaultStartTime: number = 60 * 25;

export enum CardState {
  Neutral,
  Started,
  Stopped,
  Expired,
}

const getBgColor = (cardState: CardState): string => {
  switch (cardState) {
  case CardState.Neutral:
    return "bg-white";

  case CardState.Started:
    return "bg-yellow-100";

  case CardState.Stopped:
    return "bg-red-300";

  case CardState.Expired:
    return "bg-green-100";

  default:
    return "bg-white";
  }
};

export const usePomodoro = (props: IPomodoro) => {
  const { deletePomodoro } = useContext<IPomodoroContext>(PomodoroContext);
  const [previousCardName, setPreviousCardName] = useState<string>('');
  const [cardName, setCardName] = useState<string>(
    props.title !==undefined ? props.title : '');
  const [cardState, setCardState] = useState<CardState>(CardState.Neutral);
  const [cardTimer, setCardTimer] = useState<number>(defaultStartTime);
  const [cardLastUpdate, setCardLastUpdate] = useState<number>(0);
  const [cardText, setCardText] = useState<string>(
    formatTimerString(cardTimer),
  );
  const [cardIntervalId, setCardIntervalId] = useState<number>(0);
  const [cardNameIsChanging, setCardNameIsChanging] = useState<boolean>(false);
  const cardColor = getBgColor(cardState);

  const cardIs = (currentState: CardState) =>
    (cardState === currentState);

  const resetTimer = () => {
    setCardTimer(defaultStartTime);
    setCardText(formatTimerString(defaultStartTime));
  };

  const resetInterval = () => {
    if (cardIntervalId !== 0) {
      window.clearInterval(cardIntervalId);
      setCardIntervalId(0);
    }
  };

  const onClickStart = () => {
    if (cardIntervalId !== 0)
      return;

    if (cardIs(CardState.Expired)) 
      resetTimer();

    setCardLastUpdate(Date.now());

    const intervalId: number = window.setInterval(() => {
      setCardTimer((previousState: number) => previousState - 1);
    }, 1000);

    setCardIntervalId(intervalId);
    setCardState(CardState.Started);

  };
  
  const onClickStop = () => {
    if (cardIs(CardState.Neutral))
      return;

    resetInterval();
    setCardState(CardState.Stopped);
  };

  const onClickReset = () => {
    resetInterval();
    resetTimer();
    setCardState(CardState.Neutral);
  };

  const onClickComplete = () => { 
    setCardState(CardState.Expired);
    resetInterval();
  };

  const onClickClose = () => { 
    deletePomodoro(props);
  };

  const onCardNameDoubleClick = () => {
    setPreviousCardName(cardName);
    setCardNameIsChanging(true);
  };

  const onCardNameChange: ChangeEventHandler<HTMLInputElement> = 
    (e: React.FormEvent<HTMLInputElement>) => {
      const newCardName: string = (e.target as HTMLInputElement).value;
      setCardName(newCardName);
    };

  const onCardNameChangeKeyDown = 
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        setCardNameIsChanging(false);
        e.preventDefault();
        e.stopPropagation();

        if ((e.key === 'Escape') || (cardName.length === 0) ||
        (cardName.match(/^ *$/) !== null)) {
          setCardName(previousCardName);
        }
      }
    };

  // hook for cardTimer
  useEffect(() => {

    if (cardIs(CardState.Neutral)) {
      return;
    }
    // get current timestamp and calculate seconds elapsed since then
    const currentTimestamp = Date.now();
    const secondsElapsed = Math.floor(
      (currentTimestamp - cardLastUpdate) / 1000
    );

    // if more than one second has elapsed, then ensure that we update
    // the card timer value accordingly
    if (secondsElapsed > 1) {
      const newTimerValue = cardTimer - secondsElapsed;
      setCardTimer(newTimerValue > 0 ? newTimerValue : 0);
    }

    setCardLastUpdate(currentTimestamp);
    setCardText(formatTimerString(cardTimer));
    
    // check if card has expired
    if (cardTimer <= 0) {
      resetInterval();
      setCardState(CardState.Expired);
    }
  }, [cardTimer]);

  return {
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
  }
};
