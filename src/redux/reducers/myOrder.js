const initialState = {
  idVehicle: null,
};

const myOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDER': {
      return {...state, idVehicle: action.payload.idVehicle};
    }
    default: {
      return {...state};
    }
  }
};

export default myOrder;
