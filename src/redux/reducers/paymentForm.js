const initialState = {
  idCard: null,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  location: '',
  payment: '',
};

const paymentForm = (state = initialState, action) => {
  switch (action.type) {
    case 'PAYMENT_FORM': {
      const data = action.payload;
      return {
        ...state,
        idCard: data.idCard,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        location: data.location,
        payment: data.payment,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default paymentForm;
