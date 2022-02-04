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

import { useEffect, useState } from 'react';
import { formatTimerString } from '../../utils/FormatTmerString';

const defaultStartTime: number = 60 * 25;

/**
 * CardState represents the current state of the card
 */
enum CardState {
  Neutral,
  Started,
  Stopped,
  Expired,
}

interface IProps {
  name: string;
}

export const PomodoroCard = (props: IProps) => {
  const [previousCardName, setPreviousCardName] = useState<string>('');
  const [cardName, setCardName] = useState<string>(props.name);
  const [cardState, setCardState] = useState<CardState>(CardState.Neutral);
  const [cardTimer, setCardTimer] = useState<number>(defaultStartTime);
  const [cardText, setCardText] = useState<string>(
    formatTimerString(cardTimer),
  );
  const [cardIntervalId, setCardIntervalId] = useState<number>(0);
  const [toggleNameChange, setToggleNameChange] = useState<boolean>(false);

  const cardIs = (currentState: CardState) =>
    (cardState === currentState);

  const resetTimer = () => {
    setCardTimer(defaultStartTime);
    setCardText(formatTimerString(defaultStartTime));
  };

  const resetInterval = () => {
    if (cardIntervalId) {
      window.clearInterval(cardIntervalId);
      setCardIntervalId(0);
    }
  };

  const getBgColor = (): string => {
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

  // hook for cardTimer
  useEffect(() => {
    setCardText(formatTimerString(cardTimer));

    // check if card has expired
    if (cardTimer <= 0) {
      resetInterval();
      setCardState(CardState.Expired);
    }
  }, [cardTimer]);

  return (
    <div
      className={`max-w-sm mx-auto p-6 m-4 ${getBgColor()} rounded-lg shadow-xl
    text-center border-4 border-solid`}
    >
      <div className="flex-shrink-0 pb-4 max-w-[290px]">
        {!toggleNameChange ? (
          <p
            className="text-black text-3xl font-bold"
            onDoubleClick={() => {
              setPreviousCardName(cardName);
              setToggleNameChange(true);
            }}
          >
            {cardName}
          </p>
        ) : (
          <input
            type="text"
            className="rounded-lg"
            value={cardName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setCardName((e.target as HTMLInputElement).value);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter' || e.key === 'Escape') {
                setToggleNameChange(false);
                e.preventDefault();
                e.stopPropagation();

                if (e.key === 'Escape') {
                  setCardName(previousCardName);
                }
              }
            }}
          />
        )}
      </div>
      <div className="mb-4">
        <p className="text-4xl font-bold">{cardText}</p>
      </div>
      <div className="pt-4 text-1xl">
        <button
          className="bg-[#6d4a4a] hover:bg-[#614242] text-white rounded-lg
          pl-4 pr-4 pt-2 pb-2 border-black mr-1"
          type="button"
          onClick={() => {
            if (cardIntervalId) {
              return;
            }

            if (cardIs(CardState.Expired) || cardIs(CardState.Stopped)) {
              resetTimer();
            }

            const intervalId: number = window.setInterval(() => {
              setCardTimer((previousState: number) => previousState - 1);
            }, 1000);

            setCardIntervalId(intervalId);
            setCardState(CardState.Started);
          }}
        >
          Start
        </button>
        <button
          className="bg-[#6d4a4a] hover:bg-[#614242] text-white rounded-lg
          pl-4 pr-4 pt-2 pb-2 border-black ml-1 mr-1"
          type="button"
          onClick={() => {
            resetInterval();
            setCardState(CardState.Stopped);
          }}
        >
          Stop
        </button>
        <button
          className="bg-[#6d4a4a] hover:bg-[#614242] text-white rounded-lg
          pl-4 pr-4 pt-2 pb-2 border-black ml-1"
          type="button"
          onClick={() => {
            resetInterval();
            resetTimer();
            setCardState(CardState.Neutral);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
