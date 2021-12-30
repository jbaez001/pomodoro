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

import React, { MouseEventHandler } from "react";
import { Button } from "@chakra-ui/react";

interface IProps {
  handleStart: MouseEventHandler<HTMLButtonElement>;
  handleStop: MouseEventHandler<HTMLButtonElement>;
  handleReset: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Pomodoro Controller Component
 *
 * @param handleStart fn to call onClick
 * @param handleStop fn to call onClick
 * @param handleReset fn to call onClick
 */
export const PomodoroController: React.FC<IProps> = ({
  handleStart,
  handleStop,
  handleReset,
}) =>
(
  <section className="pomodoro-controller">
    <Button
      colorScheme="primary"
      onClick={handleStart}
      marginRight="4px"
    >
      Start
    </Button>
    <Button
      colorScheme="primary"
      onClick={handleStop}>
      Stop
    </Button>
    <Button
      colorScheme="primary"
      onClick={handleReset}
      marginLeft="4px"
    >
      Reset
    </Button>
  </section>
);
