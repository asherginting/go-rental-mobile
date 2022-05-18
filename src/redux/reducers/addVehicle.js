const intialState = {
  isLoading: false,
  isSuccess: false,
  results: {},
  isError: false,
  errMessage: '',
};

const addVehicle = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_VEHICLE_LOADING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        results: {},
        isError: false,
        errMessage: '',
      };
    }
    case 'ADD_VEHICLE': {
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
    case 'ADD_VEHICLE_ERR': {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        results: {},
        isError: true,
        errMessage: action.payload,
      };
    }
    case 'ADD_VEHICLE_CLEAR': {
      return {...intialState};
    }
    default: {
      return {...state};
    }
  }
};

export default addVehicle;
