import http from '../../helpers/http';
import qs from 'qs';

export const authSignup = (username, email, phone, password) => {
  return async dispatch => {
    dispatch({
      type: 'SIGNUP_CLEAR',
    });
    try {
      const input = {
        username,
        email,
        phone_number: phone,
        password,
      };
      const {data} = await http().post('/auth/register', qs.stringify(input));
      dispatch({
        type: 'AUTH_SIGNUP',
        payload: data,
      });
    } catch (err) {
      let payload = '';
      if (err.response) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }
      dispatch({
        type: 'SIGNUP_ERR',
        payload: payload,
      });
    }
  };
};
