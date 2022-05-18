const intialState = {
  isLoading: false,
  isSuccess: false,
  results: {},
  isError: false,
  errMessage: '',
};

const updateProfile = (state = intialState, action) => {
  switch (action.type) {
    case 'UPD_PROFILE_LOADING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        results: {},
        isError: false,
        errMessage: '',
      };
    }
    case 'UPD_PROFILE': {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        results: action.payload,
        isError: false,
        errMessage: '',
      };
    }
    case 'UPD_PROFILE_ERR': {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        results: {},
        isError: true,
        errMessage: action.payload,
      };
    }
    case 'UPD_PROFILE_CLEAR': {
      return {...intialState};
    }
    default: {
      return {...state};
    }
  }
};

export default updateProfile;
