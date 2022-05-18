import http from '../../helpers/http';
import qs from 'qs';

export const verify = (username, code, password) => {
  return async dispatch => {
    try {
      const input = {username, code, password};
      const {data} = await http().post(
        '/auth/verification',
        qs.stringify(input),
      );
      dispatch({
        type: 'VERIFY_CODE',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'VERIFY_ERROR',
        payload: err.response.data.message,
      });
    }
  };
};

export const goToVerify = async dispatch => {
  dispatch({type: 'GOTO_VERIFY', payload: 'verify'});
};

export const sendCodeVerify = email => {
  return async dispatch => {
    try {
      const input = {email};
      const {data} = await http().post(
        '/auth/send-code-verify',
        qs.stringify(input),
      );
      dispatch({
        type: 'VERIFY_SEND_CODE',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'VERIFY_ERROR',
        payload: err.response.data.message,
      });
    }
  };
};
