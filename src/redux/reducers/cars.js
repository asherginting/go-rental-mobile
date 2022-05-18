const initialState = {
  results: [],
  pageInfo: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
  errMessage: '',
  dataNext: [],
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CAR_LOADING': {
      return {
        ...state,
        isError: false,
        errMessage: '',
        isLoading: true,
      };
    }
    case 'GET_CAR': {
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
    case 'GET_NEXT_CAR': {
      state.isLoading = false;
      state.results.push(...action.payload.results);
      state.pageInfo = action.payload.pageInfo;
      return {...state};
    }
    case 'GET_CAR_ERR': {
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

export default cars;
