import http from '../../helper/http';
import qs from 'qs';

export const myOrder = idVehicle => {
  return dispatch => {
    dispatch({
      type: 'GET_ORDER',
      payload: {
        idVehicle,
      },
    });
  };
};

export const detailOrder = (qty, startDate, totalDay) => {
  return dispatch => {
    dispatch({
      type: 'DETAIL_ORDER',
      payload: {
        qty,
        startDate,
        totalDay,
      },
    });
  };
};

export const paymentForm = (
  idCard,
  firstName,
  lastName,
  phone,
  email,
  location,
  payment,
) => {
  return dispatch => {
    dispatch({
      type: 'PAYMENT_FORM',
      payload: {idCard, firstName, lastName, phone, email, location, payment},
    });
  };
};

export const transactionCode = (paymentCode, bookingCode) => {
  return dispatch => {
    dispatch({
      type: 'TRANSACTION_CODE',
      payload: {paymentCode, bookingCode},
    });
  };
};
