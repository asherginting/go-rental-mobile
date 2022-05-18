const intialState = {
  results: [],
};

const favorite = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_FAV': {
      state.results = [...state.results, action.payload];
      return {...state};
    }
    case 'DEL_FAV': {
      return {...state, results: action.payload};
    }
    case 'CLEAR_FAV': {
      return {...intialState};
    }
    default: {
      return {...state};
    }
  }
};

export default favorite;
