<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from 'react';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
