const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errMessage: '',
};

const deleteHistory = (state = initialState, action) => {
  switch (action.type) {
    case 'DEL_HISTORY_LOADING': {
      return {
        ...state,
        isSuccess: false,
        isLoading: true,
        isError: false,
        errMessage: '',
      };
    }
    case 'DEL_HISTORY': {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'DEL_HISTORY_ERR': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        errMessage: action.payload,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default deleteHistory;
