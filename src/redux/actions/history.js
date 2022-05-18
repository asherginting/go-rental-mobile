import http from '../../helpers/http';
import qs from 'qs';

export const addHistory = (
  id_user,
  id_vehicle,
  rent_start_date,
  rent_end_date,
  prepayment,
  token,
) => {
  return async dispatch => {
    dispatch({
      type: 'ADD_HISTORY_LOADING',
    });
    try {
      const input = {
        id_user,
        id_vehicle,
        rent_start_date,
        rent_end_date,
        prepayment,
      };
      const {data} = await http(token).post(
        '/histories/complete',
        qs.stringify(input),
      );
      dispatch({
        type: 'ADD_HISTORY',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'ADD_HISTORY_ERR',
        payload: err.response.data.message,
      });
    }
  };
};

export const getHistories = (user, token) => {
  return async dispatch => {
    dispatch({
      type: 'GET_HISTORY_LOADING',
    });
    try {
      const {data} = await http(token).get(
        `/histories/?limit=1000&search=${user}`,
      );
      dispatch({
        type: 'GET_HISTORY',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'GET_HISTORY_ERR',
        payload: err.response.data.message,
      });
    }
  };
};

export const deleteHistory = (id, token) => {
  return async dispatch => {
    dispatch({
      type: 'DEL_HISTORY_LOADING',
    });
    try {
      await http(token).delete(`/histories/${id}`);
      dispatch({
        type: 'DEL_HISTORY',
      });
    } catch (err) {
      dispatch({
        type: 'DEL_HISTORY_ERR',
        payload: err.response.data.message,
      });
    }
  };
};
