const intialState = {
  isLoading: false,
  isSuccess: false,
  results: {},
  isError: false,
  errMessage: '',
};

const updateVehicle = (state = intialState, action) => {
  switch (action.type) {
    case 'UPD_VEHICLE_LOADING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        results: {},
        isError: false,
        errMessage: '',
      };
    }
    case 'UPD_VEHICLE': {
      // console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        results: action.payload,
        isError: false,
        errMessage: '',
      };
    }
    case 'UPD_VEHICLE_ERR': {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        results: {},
        isError: true,
        errMessage: action.payload,
      };
    }
    case 'UPD_VEHICLE_CLEAR': {
      return {...intialState};
    }
    default: {
      return {...state};
    }
  }
};

export default updateVehicle;
