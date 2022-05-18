export const addFavorite = data => {
  return dispatch => {
    dispatch({
      type: 'ADD_FAV',
      payload: data,
    });
  };
};

export const deleteFavorite = data => {
  return dispatch => {
    dispatch({
      type: 'DEL_FAV',
      payload: data,
    });
  };
};
