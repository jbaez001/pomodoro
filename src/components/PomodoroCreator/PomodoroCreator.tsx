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

import axios from "axios";
import { useContext } from "react";

import { 
  IPomodoroContext, 
  PomodoroContext 
} from "../../context/PomodoroProvider";
import { IPomodoro, IPomodoroCreate } from "../../interfaces/pomodoros";

const usePomodoroCreator = () => {
  const {
    addPomodoro,
  } = useContext<IPomodoroContext>(PomodoroContext);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newPomodoro: IPomodoroCreate = {
        title: (e.target as HTMLInputElement).value,
        completed: false,
        dateCreated: new Date()
      };

      axios.post<IPomodoroCreate>(
        'http://localhost:3000/pomodoros/',
        newPomodoro,
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response) => {
        addPomodoro(response.data as IPomodoro);

        (e.target as HTMLInputElement).value = 'Create New Pomodoro';
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error:', error);
      });
    }
  }

  return {
    onKeyDown
  }
}

export const PomodoroCreator = () => {
  const {
    onKeyDown
  } = usePomodoroCreator();

  return (
    <>
      <div className="relative">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder="Create Pomodoro"
          className="w-full rounded-md border-gray-200 
                     py-2.5 pe-10 shadow-sm sm:text-sm"
          onKeyDown={onKeyDown}
        />
        <span className="absolute inset-y-0 
                         end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
          </button>
        </span>
      </div>
    </>
  )
}
