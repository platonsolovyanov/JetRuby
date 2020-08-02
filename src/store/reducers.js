import { combineReducers } from 'redux';
import { boardReducer } from './board/reducers';
import { tileReducer } from './tile/reducers';

export default combineReducers({
  board: boardReducer,
  tile: tileReducer,
});
