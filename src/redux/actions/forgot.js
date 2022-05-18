import http from '../../helpers/http';
import qs from 'qs';

export const forgotPwd = email => {
  return async dispatch => {
    dispatch({
      type: 'FORGOT_CLEAR',
    });
    try {
      const input = {email};
      dispatch({
        type: 'FORGOT_PWD',
        payload: await http().post('/auth/forgotPassword', qs.stringify(input)),
      });
    } catch (err) {
      dispatch({
        type: 'FORGOT_ERR',
        payload: err.response.data.message,
      });
    }
  };
};

export const verifyPwd = (email, code, password, confirmPassword) => {
  return async dispatch => {
    dispatch({
      type: 'FORGOT_CLEAR',
    });
    try {
      const input = {email, code, password, confirmPassword};
      dispatch({
        type: 'ADD_NEW_PWD',
        payload: await http().post('/auth/forgotPassword', qs.stringify(input)),
      });
    } catch (err) {
      dispatch({
        type: 'FORGOT_ERR',
        payload: err.response.data.message,
      });
    }
  };
};
