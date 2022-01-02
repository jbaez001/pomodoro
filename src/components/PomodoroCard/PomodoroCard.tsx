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
import { toFormattedTimerString } from '../../utils/ToFormattedTimerString';

interface IProps {
  name: string;
}

const defaultPomodoroStartTime: number = 60 * 25;

export const PomodoroCard = (props: IProps) => {
  const [previousCardName, setPreviousCardName] = useState<string>('');
  const [cardName, setCardName] = useState<string>(props.name);
  const [cardTimer, setCardTimer] = useState<number>(defaultPomodoroStartTime);
  const [cardText, setCardText] = useState<string>(
    toFormattedTimerString(cardTimer),
  );
  const [cardIntervalId, setCardIntervalId] = useState<number>(0);
  const [cardExpired, setCardExpired] = useState<boolean>(false);
  const [toggleNameChange, setToggleNameChange] = useState<boolean>(false);

  const resetTimer = () => {
    setCardTimer(defaultPomodoroStartTime);
    setCardText(toFormattedTimerString(defaultPomodoroStartTime));
    setCardExpired(false);
  };

  const resetInterval = () => {
    if (cardIntervalId) {
      window.clearInterval(cardIntervalId);
      setCardIntervalId(0);
    }
  };

  // hook for cardTimer
  useEffect(() => {
    setCardText(toFormattedTimerString(cardTimer));

    // check if card has expired
    if (cardTimer <= 0) {
      resetInterval();
      setCardExpired(true);
    }
  }, [cardTimer]);

  return (
    <div
      className={`max-w-sm mx-auto p-6 m-4
    ${!cardExpired ? 'bg-white' : 'bg-green-100'} rounded-lg shadow-xl
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

            if (cardExpired) {
              resetTimer();
            }

            const intervalId: number = window.setInterval(() => {
              setCardTimer((previousState: number) => previousState - 1);
            }, 1000);

            setCardIntervalId(intervalId);
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
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
