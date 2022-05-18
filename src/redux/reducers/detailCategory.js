const initialState = {
  idCategory: null,
  nameCategory: '',
};

const detailCategory = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY': {
      return {
        ...state,
        nameCategory: action.payload.nameCategory,
        idCategory: action.payload.idCategory,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default detailCategory;
