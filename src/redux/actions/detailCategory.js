export const getDetailCategory = (nameCategory, idCategory) => {
  return dispatch => {
    dispatch({
      type: 'GET_CATEGORY',
      payload: {
        nameCategory,
        idCategory,
      },
    });
  };
};
