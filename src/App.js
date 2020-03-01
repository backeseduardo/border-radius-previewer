import React, { useState } from 'react';
import './App.css';
import Box from './box';
import CssPreview from './css-preview';

function App() {
  const [value, setValue] = useState({});

  return (
    <div className="App">
      <Box onChange={setValue} />
      <CssPreview value={value} />
    </div>
  );
}

export default App;
