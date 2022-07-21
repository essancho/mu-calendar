import React, { useState } from 'react';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {counter}
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Add
      </button>
    </div>
  );
};

export default App;
