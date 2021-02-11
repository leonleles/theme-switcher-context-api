import React from 'react';
import { ThemeConsumer } from "styled-components";

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>Alterar Tema</button>
  );
}

export default ThemeSwitcher;