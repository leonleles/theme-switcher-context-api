import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeSwitcher from './components/ThemeSwitcher';
import TodoList from './components/TodoList';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

function App() {
  const [theme, setTheme] = useState(themes.dark)

  function toggleTheme() {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <TodoList />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
