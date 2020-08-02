export const FIRST_ACTIVE_TILE = 'FIRST_ACTIVE_TILE';
export const COMPARE_TILE = 'COMPARE_TILE';
export const ADD_NULL_IN_TILE = 'ADD_NULL_IN_TILE';

export const activeTile = firstTile => ({
  type: FIRST_ACTIVE_TILE,
  payload: firstTile,
});

export const compareTile = secondTile => ({
  type: COMPARE_TILE,
  payload: secondTile,
});

export const emptyTile = (tile = null) => ({
  type: ADD_NULL_IN_TILE,
  payload: tile,
});
