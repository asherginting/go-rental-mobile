const initialState = {
  qty: 0,
  startDate: '',
  totalDay: 0,
};

const detailOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAIL_ORDER': {
      const data = action.payload;
      return {
        ...state,
        qty: data.qty,
        startDate: data.startDate,
        totalDay: data.totalDay,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default detailOrder;
