import React from 'react';
import Small from './hook/Small';
import LearnReducer from '../src/reducer/LearnReducer';
import LearnReducer_todo from '../src/reducer/LearnReducer_todo';

function App() {
  return (
    <div className="App">
      <LearnReducer_todo/>
    </div>
  );
}

export default App;
