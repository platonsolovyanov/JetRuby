import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import rootReducer from './store/reducers';

import BoardContainer from './container/BoardContainer';

let store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className='block'></div>
      <div className='wrapper'>
        <h1>Tile Game</h1>
        <div className='forms'>
          <BoardContainer {...store} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
