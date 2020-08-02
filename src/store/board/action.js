export const REPLACE_COLOR_ON_UNDEFINED = 'REPLACE_COLOR_ON_UNDEFINED';

export const replaceColorOnUndefined = activeTile => ({
  type: REPLACE_COLOR_ON_UNDEFINED,
  payload: activeTile,
});
