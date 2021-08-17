import React, { useState } from 'react';
import '../AppComponents/App.css';
import CatComponent from '../CatComponents/CatComponent';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App" tabIndex={0} onClick={() => setCount(count + 1)} onKeyPress={() => setCount(count +1)}>
      <header className="App-header">
        <p> My Score: {count} </p>
        <CatComponent clickNumber={count} />
      </header>
    </div>
  );
}

export default App;
