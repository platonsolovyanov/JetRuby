import { FIRST_ACTIVE_TILE } from './action';
import { COMPARE_TILE } from './action';
import { ADD_NULL_IN_TILE } from './action';
let initialState = {
  firstActive: null,
  secondActive: null,
};

export const tileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_ACTIVE_TILE:
      return { ...state, firstActive: action.payload };
    case COMPARE_TILE:
      if (
        state.firstActive[0] == action.payload[0] &&
        state.firstActive[1] !== action.payload[1]
      ) {
        return {
          ...state,
          firstActive: null,
          secondActive: null,
        };
      } else {
        return {
          ...state,
          secondActive: action.payload,
        };
      }
    case ADD_NULL_IN_TILE:
      return {
        ...state,
        firstActive: action.payload,
        secondActive: action.payload,
      };
  }
  return state;
};
