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
  onCardNameDoubleClick,
  onCardNameChange,
  onCardNameChangeKeyDown
}: IPomodoroCardProps)  => {

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
        <div className="pt-4 text-1xl">
          <button
            className="bg-[#6d4a4a] hover:bg-[#614242] text-white
                        rounded-lg pl-4 pr-4 pt-2 pb-2 border-black mr-1"
            type="button"
            onClick={onClickStart}
          >
            Start
          </button>
          <button
            className="bg-[#6d4a4a] hover:bg-[#614242] text-white
                        rounded-lg pl-4 pr-4 pt-2 pb-2 border-black ml-1 mr-1"
            type="button"
            onClick={onClickStop}
          >
            Stop
          </button>
          <button
            className="bg-[#6d4a4a] hover:bg-[#614242] text-white
                        rounded-lg pl-4 pr-4 pt-2 pb-2 border-black ml-1"
            type="button"
            onClick={onClickReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
