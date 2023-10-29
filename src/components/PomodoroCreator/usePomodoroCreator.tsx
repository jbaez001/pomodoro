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

import { useContext } from "react";
import { v4 } from 'uuid';

import { 
  IPomodoroContext, 
  PomodoroContext 
} from "../../context/PomodoroProvider";
import { IPomodoro } from "../../types/pomodoros";

export const usePomodoroCreator = () => {
  const {
    addPomodoro,
  } = useContext<IPomodoroContext>(PomodoroContext);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      (e.target as HTMLInputElement).value = '';
    }
    else if (e.key === 'Enter') {
      const title: string = (e.target as HTMLInputElement).value;
      
      if ((title.length == 0) || (title.match(/^ *$/) !== null)) {
        return;
      }

      const newPomodoro: IPomodoro = {
        _id: v4(),
        title: title
      };
      (e.target as HTMLInputElement).value = '';
      addPomodoro(newPomodoro);
    }
  }

  return {
    onKeyDown
  }
}