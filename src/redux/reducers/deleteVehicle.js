const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errMessage: '',
};

const deleteVehicle = (state = initialState, action) => {
  switch (action.type) {
    case 'DEL_VEHICLE_LOADING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'DEL_VEHICLE': {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        errMessage: '',
      };
    }
    case 'DEL_VEHICLE_ERR': {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errMessage: action.payload,
      };
    }
    case 'DEL_VEHICLE_CLEAR': {
      return {...initialState};
    }
    default: {
      return {...state};
    }
  }
};

export default deleteVehicle;
