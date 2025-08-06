import React from 'react'
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';
import Taskbar from './Taskbar';
import Desktop from './Desktop';

function App() {
  return (
    <div>
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
