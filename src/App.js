import React from 'react'
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { createGlobalStyle } from 'styled-components';
import '@react95/icons/icons.css';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import Popup from './PopupAlert';

function App() {
  return (
    <div>
      <Desktop />
      <Taskbar />
      <Popup />
    </div>
  );
}

export default App;
