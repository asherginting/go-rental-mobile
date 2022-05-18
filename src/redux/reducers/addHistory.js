const initialState = {
  results: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  errMessage: '',
};

const addHistory = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HISTORY_LOADING': {
      return {
        ...state,
        results: {},
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMessage: '',
      };
    }
    case 'ADD_HISTORY': {
      return {
        ...state,
        isSuccess: true,
        results: action.payload,
        isLoading: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'ADD_HISTORY_ERR': {
      return {
        ...state,
        results: {},
        isSuccess: false,
        isLoading: false,
        isError: true,
        errMessage: action.payload,
      };
    }
    case 'CLEAR_ADD_HISTORY': {
      return {...initialState};
    }
    default: {
      return {...state};
    }
  }
};

export default addHistory;
