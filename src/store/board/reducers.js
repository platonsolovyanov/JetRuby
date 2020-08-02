import { REPLACE_COLOR_ON_UNDEFINED } from './action';

let initialState = {
  colors: [
    'yellow',
    'red',
    'blue',
    'yellow',
    'blue',
    'green',
    'pink',
    'purple',
    'orange',
    'green',
    'red',
    'black',
    'purple',
    'pink',
    'orange',
    'black',
  ],
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_COLOR_ON_UNDEFINED:
      return {
        colors: state.colors.map(el => {
          if (el !== action.payload) {
            return el;
          }
        }),
      };
  }
  return state;
};
