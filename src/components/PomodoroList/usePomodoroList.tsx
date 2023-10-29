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
import { useEffect, useState } from "react";


type IPomodoro = {
  _id: string;
  title: string;
  completed: boolean;
  dateCreated: Date;
  dateStarted?: Date;
  dateStopped?: Date;
  dateCompleted?: Date;
}

const defaultPomodoros: IPomodoro[] = [];

export const usePomodoroList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [pomodoros, setPomodoros] = useState<IPomodoro[]>(defaultPomodoros);

  useEffect(() => {
    (async () => {
      if (loading)
        return;
    
      setLoading(true);
      setErrorMsg('');

      // fetch pomodoros
      axios.get<IPomodoro[]>('http://localhost:3000/pomodoros', {
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((response) => {
        setPomodoros(response.data);
        setLoading(false);
      }).catch((err) => {
        setErrorMsg(err);
        setLoading(false);
      });
    })();
  }, []);

  return {
    loading,
    errorMsg,
    pomodoros
  }
}
