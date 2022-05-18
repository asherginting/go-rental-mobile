const initialState = {
  isCodeSend: false,
  isSuccess: false,
  isError: false,
  errMessage: '',
};

const forgot = (state = initialState, action) => {
  switch (action.type) {
    case 'FORGOT_PWD': {
      return {
        ...state,
        isCodeSend: true,
        isSuccess: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'ADD_NEW_PWD': {
      return {
        ...state,
        isCodeSend: true,
        isSuccess: true,
        isError: false,
        errMessage: '',
      };
    }
    case 'FORGOT_ERR': {
      return {
        ...state,
        isSuccess: false,
        isError: true,
        errMessage: action.payload,
      };
    }
    case 'FORGOT_CLEAR': {
      return {
        ...state,
        isSuccess: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'FORGOT_CLEAR_ALL': {
      return {
        ...state,
        isCodeSend: false,
        isSuccess: false,
        isError: false,
        errMessage: '',
      };
    }
    default: {
      return {...state};
    }
  }
};

export default forgot;
