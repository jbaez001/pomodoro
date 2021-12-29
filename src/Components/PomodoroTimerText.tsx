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

import React from "react";

interface IProps {
  text: string[];
}

/**
 * This is the actual timer text
 *
 * @param text string[]
 */
export const PomodoroTimerText: React.FC<IProps> = ({ text }) => (
  <section className="pomodoro-timer">
    <p className="pomodoro-text">{text[0]}</p>
    <span>:</span>
    <p className="pomodoro-text">{text[1]}</p>
  </section>
)
