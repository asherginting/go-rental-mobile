import http from '../../helpers/http';
import RNFetchBlob from 'rn-fetch-blob';
import API_URL from '../../helpers/AppApi';

export const getCategory = (category, page = 1) => {
  return async dispatch => {
    dispatch({
      type: `GET_${category}_LOADING`,
    });
    try {
      const {data} = await http().get(
        `/vehicles/category/?search=${category}&limit=5&page=${page}`,
      );
      if (page > 1) {
        dispatch({
          type: `GET_NEXT_${category}`,
          payload: data,
        });
      } else {
        dispatch({
          type: `GET_${category}`,
          payload: data,
        });
      }
    } catch (err) {
      dispatch({
        type: 'GET_CARS_ERR',
        payload: err.response.data.message,
      });
    }
  };
};

export const getFilter = (dataFilter, page = 1) => {
  return async dispatch => {
    dispatch({
      type: 'GET_SEARCH_LOADING',
    });
    try {
      let apiUrl = `/vehicles/category/?limit=5&page=${page}`;
      let keywoard = '';
      let resDataFilter = {...dataFilter};
      Object.keys(dataFilter).forEach(item => {
        if (item) {
          apiUrl += `&${item}=${dataFilter[item]}`;
          keywoard += `${dataFilter[item]}-`;
        }
      });
      const {data} = await http().get(apiUrl);
      let type = 'GET_SEARCH';
      if (page > 1) {
        type = 'GET_NEXT_SEARCH';
      }
      dispatch({
        type,
        payload: data,
        keywoard: keywoard,
        dataFilter: resDataFilter,
      });
    } catch (err) {
      dispatch({
        type: 'GET_SEARCH_ERR',
        payload: err.response.data.message,
      });
    }
  };
};

export const getDetailVehicle = id => {
  return async dispatch => {
    dispatch({
      type: 'GET_DETAIL_VEHICLE_LOADING',
    });
    try {
      const {data} = await http().get(`/vehicles/${id}`);
      dispatch({
        type: 'GET_DETAIL_VEHICLE',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'GET_DETAIL_VEHICLE_ERR',
        payload: err.response.data.message,
      });
    }
  };
};

export const addVehicle = (
  id_category,
  brand,
  image,
  capacity,
  location,
  price,
  qty,
  token,
) => {
  return async dispatch => {
    dispatch({
      type: 'ADD_VEHICLE_LOADING',
    });
    try {
      const {data} = await RNFetchBlob.fetch(
        'POST',
  `import{API_URL}/vehicles`,
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'image',
            filename: image.fileName,
            type: image.type,
            data: RNFetchBlob.wrap(image.uri),
          },
          {name: 'id_category', data: String(id_category)},
          {name: 'brand', data: brand},
          {name: 'capacity', data: String(capacity)},
          {name: 'location', data: location},
          {name: 'price', data: String(price)},
          {name: 'qty', data: String(qty)},
        ],
      );

      dispatch({
        type: 'ADD_VEHICLE',
        payload: JSON.parse(data).results,
      });
    } catch (err) {
      dispatch({
        type: 'ADD_VEHICLE_ERR',
        payload: err.data,
      });
    }
  };
};

export const updateVehicle = (token, id, dataInput) => {
  return async dispatch => {
    dispatch({
      type: 'UPD_VEHICLE_LOADING',
    });
    try {
      let dataUpdate = [];
      if (dataInput.image) {
        dataUpdate.push({
          name: 'image',
          filename: dataInput.image.fileName,
          type: dataInput.image.type,
          data: RNFetchBlob.wrap(dataInput.image.uri),
        });
      }
      Object.keys(dataInput).forEach(item => {
        if (item) {
          dataUpdate.push({name: `${item}`, data: String(dataInput[item])});
        }
      });

      const {data} = await RNFetchBlob.fetch(
        'PATCH',
  `import{API_URL}/vehicles/${id}`,
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        dataUpdate,
      );
      dispatch({
        type: 'UPD_VEHICLE',
        payload: JSON.parse(data).results,
      });
    } catch (err) {
      dispatch({
        type: 'UPD_VEHICLE_ERR',
        payload: err,
      });
    }
  };
};

export const deleteVehicle = (token, id) => {
  return async dispatch => {
    dispatch({type: 'DEL_VEHICLE_LOADING'});
    try {
      const {data} = await http(token).delete(`/vehicles/${id}`);
      dispatch({type: 'DEL_VEHICLE', payload: data});
    } catch (err) {
      dispatch({
        type: 'DEL_VEHICLE_ERR',
        payload: err.response.data.message,
      });
    }
  };
};