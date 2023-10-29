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

import { createContext, ReactElement, useContext, useState } from "react";
import { v4 } from "uuid";

import { IPomodoro } from "../types/pomodoros"

export type IPomodoroContext = {
  pomodoros: IPomodoro[];
  addPomodoro: (pomodoro: IPomodoro) => void;
  deletePomodoro: (pomodoro: IPomodoro) => void;
  setPomodoros: React.Dispatch<React.SetStateAction<IPomodoro[]>>;
}

const defaultPomodoros: IPomodoro[] = [
  {
    _id: v4(),
    title: 'Breathe'
  }
];

const defaultContext: IPomodoroContext = {
  pomodoros: defaultPomodoros,
  addPomodoro: () => { return },
  deletePomodoro: () => { return },
  setPomodoros: () => { return },
}

export const PomodoroContext = createContext<IPomodoroContext>(defaultContext);

type IProps = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  children: ReactElement<any, any>;
}

export const PomodoroProvider = ({ children }: IProps) => {
  const context = useContext<IPomodoroContext>(PomodoroContext);
  const [pomodoros, setPomodoros] = useState<IPomodoro[]>(context.pomodoros);

  const addPomodoro = (pomodoro: IPomodoro) => {
    setPomodoros([...pomodoros, pomodoro])
  }

  const deletePomodoro = (pomodoro: IPomodoro) => {
    setPomodoros(pomodoros.filter(item => item._id !== pomodoro._id));
  }

  return (
    <PomodoroContext.Provider
      value={{
        pomodoros: pomodoros,
        addPomodoro: addPomodoro,
        setPomodoros: setPomodoros,
        deletePomodoro: deletePomodoro
      }}
    >
      {children}
    </PomodoroContext.Provider>
  )
};
