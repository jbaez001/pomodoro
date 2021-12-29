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

import React, { useCallback, useEffect, useState } from "react";
import { defaultStartTime } from "../Settings";
import { toTimerStringArray } from "../Utils/ToTimerStringArray";
import { PomodoroTimerText } from "./PomodoroTimerText";
import { PomodoroController } from "./PomodoroController";


/**
 * Pomodoro main component
 */
export const Pomodoro: React.FC = () => {
  const [timer, setTimer] = useState<number>(defaultStartTime);
  const [pomodoroTimerText, setPomodoroTimerText] = useState<string[]>([]);
  const [intervalId, setIntervalId] = useState<number>(0);

  const handleStart = () => {
    const newIntervalId: number = window.setInterval(() => {
      setTimer((previousState: number) => previousState - 1);
    }, 1000);

    setIntervalId(newIntervalId);
  };

  const handlePause = () => {
    window.clearInterval(intervalId);
  };

  const handleReset = () => {
    window.clearInterval(intervalId);
    setTimer(defaultStartTime);
  };

  const handleExpired = useCallback(() => {
    setTimer(0);
  }, [intervalId]);

  useEffect(() => {
    setPomodoroTimerText(toTimerStringArray(timer));

    if (timer <= 0) {
      window.clearInterval(intervalId);
      handleExpired();
    }
  }, [timer, handleExpired]);

  return (
    <section>
      <PomodoroTimerText
        text={pomodoroTimerText}
      />
      <PomodoroController
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
    </section>
  );
};
