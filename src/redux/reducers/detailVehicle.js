const initialState = {
  results: {},
  isLoading: false,
  isError: false,
  errMessage: '',
};

const detailVehicle = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_VEHICLE_LOADING': {
      return {
        ...state,
        results: {},
        isLoading: true,
        isError: false,
        errMessage: '',
      };
    }
    case 'GET_DETAIL_VEHICLE': {
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        isError: false,
        errMessage: '',
      };
    }
    case 'GET_DETAIL_VEHICLE_ERR': {
      return {
        ...state,
        results: {},
        isLoading: false,
        isError: true,
        errMessage: action.payload,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default detailVehicle;
