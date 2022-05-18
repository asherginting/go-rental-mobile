const initialState = {
  results: [],
  isLoading: false,
  isError: false,
  errMessage: false,
  pageInfo: {},
};

const histories = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HISTORY_LOADING': {
      return {
        ...state,
        results: [],
        isLoading: true,
        isError: false,
        errMessage: false,
        pageInfo: {},
      };
    }
    case 'GET_HISTORY': {
      const data = action.payload;
      state.results = data.results;
      state.pageInfo = data.pageInfo;
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMessage: false,
      };
    }
    case 'GET_HISTORY_ERR': {
      return {
        ...state,
        results: [],
        isLoading: false,
        isError: true,
        errMessage: action.payload,
        pageInfo: {},
      };
    }
    default: {
      return {...state};
    }
  }
};

export default histories;
