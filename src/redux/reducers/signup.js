const initialState = {
  message: '',
  username: '',
  isSuccess: false,
  errMessage: '',
  isError: false,
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_CLEAR': {
      state.message = '';
      state.errMessage = '';
      state.username = '';
      state.isError = false;
      state.isSuccess = false;
      return {...state};
    }
    case 'AUTH_SIGNUP': {
      return {
        ...state,
        username: action.payload.results.username,
        message: action.payload.message,
        isSuccess: true,
      };
    }
    case 'SIGNUP_ERR': {
      state.isError = true;
      state.isSuccess = false;
      state.errMessage = action.payload;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default signup;
