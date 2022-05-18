const initialState = {
  paymentCode: null,
  bookingCode: null,
};

const transactionCode = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTION_CODE': {
      const data = action.payload;
      return {
        ...state,
        paymentCode: data.paymentCode,
        bookingCode: data.bookingCode,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default transactionCode;
