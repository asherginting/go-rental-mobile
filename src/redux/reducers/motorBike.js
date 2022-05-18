const initialState = {
  results: [],
  pageInfo: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
  errMessage: '',
};

const motorbike = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOTORBIKE_LOADING': {
      return {
        ...state,
        isError: false,
        errMessage: '',
        isLoading: true,
      };
    }
    case 'GET_MOTORBIKE': {
      state.results.push(...action.payload.results);
      state.pageInfo = action.payload.pageInfo;
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'GET_NEXT_MOTORBIKE': {
      state.isLoading = false;
      state.results.push(...action.payload.results);
      state.pageInfo = action.payload.pageInfo;
      return {...state};
    }
    case 'GET_MOTORBIKE_ERR': {
      return {
        ...state,
        results: [],
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

export default motorbike;
