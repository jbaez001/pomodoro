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

import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#946c6c",
    200: "#946c6c",
    300: "#885c5c",
    400: "#7a5353",
    500: "#6d4a4a",
    600: "#5f4040",
    700: "#523737",
    800: "#442e2e",
    900: "#362525",
  },
};

export const defaultTheme = extendTheme({ colors });
