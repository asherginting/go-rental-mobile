const initialState = {
  token: null,
  isError: false,
  errMessage: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_LOADING': {
      return {...state, isLoading: true};
    }
    case 'AUTH_LOGIN': {
      state.token = action.payload;
      return {...state, isLoading: false};
    }
    case 'AUTH_LOGOUT': {
      return {...initialState};
    }
    case 'AUTH_ERROR': {
      state.token = null;
      state.isError = true;
      state.errMessage = action.payload;
      return {...state, isLoading: false};
    }
    case 'AUTH_CLEAR_ERR': {
      return {...state, isError: false, errMessage: ''};
    }
    default: {
      return {...state};
    }
  }
};

export default auth;
