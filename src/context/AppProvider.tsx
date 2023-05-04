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

import React, { ReactElement, useContext } from 'react';

export type IAppContext = {
  pageTitle: string;
}

const defaultApplicationContext: IAppContext = {
  pageTitle: '',
};

export const AppContext = React.createContext(defaultApplicationContext);

type IProps = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  children: ReactElement<any, any>;
}

export const AppProvider = (props: IProps) => {
  const context = useContext<IAppContext>(AppContext);

  return (
    <AppContext.Provider
      value={{
        pageTitle: context.pageTitle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
