import logo from './logo.svg';
import './App.scss';
import React from 'react';

function App() {
  const [theme, setTheme] = React.useState('light')

  const handler = (theme) => {
    setTheme(theme)
  }

  return (
    <div className={`App ${theme}`}>
      <button onClick={() => handler(theme === 'light'? 'dark': 'light')}>theme - {theme}</button>
    </div>
  );
}

export default App;
