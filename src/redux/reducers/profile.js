const initialState = {
  results: {},
  isLoading: false,
  isError: false,
  errMessage: '',
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE_LOADING': {
      return {
        ...state,
        results: {},
        isLoading: true,
        isError: false,
        errMessage: '',
      };
    }
    case 'GET_PROFILE': {
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'GET_PROFILE_ERR': {
      return {
        ...state,
        results: {},
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

export default profile;
