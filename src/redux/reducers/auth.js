const initialState = {
  token: null,
  isErr: false,
  errMsg: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
      case 'AUTH_LOGIN': {
          state.token = action.payload;
          return {...state};
      }
      case 'AUTH_LOGOUT': {
          return {...initialState};
      }
      case 'AUTH_ERROR': {
          state.token = null;
          state.isErr = true;
          state.errMsg = action.payload;
          return {...state};
      }
      case 'AUTH_CLEAR_ERR': {
          return {...state, isErr: false, errMsg: ''};
      }
      default: {
          return {...state};
      }
  }
};

export default auth;