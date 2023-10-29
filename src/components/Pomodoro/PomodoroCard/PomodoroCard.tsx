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

import { 
  ChangeEventHandler, 
  KeyboardEventHandler, 
  MouseEventHandler
} from "react";

type IPomodoroCardProps = {
  cardName: string;
  cardColor: string;
  cardText: string;
  cardNameIsChanging: boolean;
  onClickStart?: MouseEventHandler<HTMLElement>;
  onClickStop?: MouseEventHandler<HTMLElement>;
  onClickReset?: MouseEventHandler<HTMLElement>;
  onClickComplete?: MouseEventHandler<HTMLElement>;
  onClickClose?: MouseEventHandler<HTMLElement>;
  onCardNameDoubleClick?: MouseEventHandler<HTMLElement>;
  onCardNameChange?: ChangeEventHandler<HTMLElement>;
  onCardNameChangeKeyDown?: KeyboardEventHandler<HTMLElement>;
}

export const PomodoroCard = ({ 
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
}: IPomodoroCardProps) => {

  return (
    <>
      <div
        className={`max-w-sm mx-auto p-6 m-4 ${cardColor}
                    rounded-lg shadow-xl text-center border-4 border-solid`}
      >
        <div className="flex-shrink-0 pb-4 max-w-[290px]">
          {!cardNameIsChanging ? (
            <p
              className="text-black text-3xl font-bold"
              onDoubleClick={onCardNameDoubleClick}
            >
              {cardName}
            </p>
          ) : (
            <input
              type="text"
              className="rounded-lg"
              value={cardName}
              onChange={onCardNameChange}
              onKeyDown={onCardNameChangeKeyDown}
            />
          )}
        </div>
        <div className="mb-4">
          <p className="text-4xl font-bold">{cardText}</p>
        </div>
        <span
          className="inline-flex -space-x-px overflow-hidden 
                    rounded-md border bg-[#6d4a4a] text-white shadow-sm"
        >
          <button
            className="inline-block px-4 py-2 text-sm font-medium 
                      hover:bg-[#614242] focus:relative"
            onClick={onClickStart}
          >
            Start
          </button>

          <button
            className="inline-block px-4 py-2 text-sm font-medium 
                      hover:bg-[#614242] focus:relative"
            onClick={onClickStop}
          >
            Stop
          </button>

          <button
            className="inline-block px-4 py-2 text-sm font-medium 
                      hover:bg-[#614242] focus:relative"
            onClick={onClickReset}
          >
            Reset
          </button>
          <button
            className="inline-block px-4 py-2 text-sm font-medium 
                      hover:bg-[#614242] focus:relative"
            onClick={onClickComplete}
          >
            (C)
          </button>
          <button
            className="inline-block px-4 py-2 text-sm font-medium 
                      hover:bg-[#614242] focus:relative"
            onClick={onClickClose}
          >
            (X)
          </button>
        </span>

      </div>
    </>
  );
};
