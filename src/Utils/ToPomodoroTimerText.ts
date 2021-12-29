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

/**
 * toPomodoroTimerText returns a string array that contains
 * minutes and seconds (with leading 0 if need be)
 *
 * @param timer time in seconds
 */
export const toPomodoroTimerText = (timer: number) : string[] => {
  const x: number = timer / 60;
  const minutes: number = Math.floor(x);
  const seconds: number = (x - minutes) * 60;

  return [
    minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
    seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
  ];
};
