const initialState = {
  isSuccess: false,
  isError: false,
  errMessage: '',
};

const verify = (state = initialState, action) => {
  switch (action.type) {
    case 'VERIFY_SEND_CODE': {
      return {...state, isSend: true, resSend: action.payload};
    }
    case 'VERIFY_CODE': {
      state.isError = false;
      state.errMessage = '';
      state.isSuccess = true;
      return {...state};
    }
    case 'GOTO_VERIFY': {
      return {...state, gotoVerify: action.payload};
    }
    case 'VERIFY_ERROR': {
      state.isError = true;
      state.errMessage = action.payload;
      state.isSuccess = false;
      return {...state};
    }
    case 'VERIFY_CLEAR': {
      return {...initialState};
    }
    default: {
      return {...state};
    }
  }
};

export default verify;
