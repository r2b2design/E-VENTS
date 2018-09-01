import { fetchRocksDataBegin, fetchRocksDataSuccess, fetchRocksDataFailure } from './rocksDataActions'


export function fetchRocksData(rocksURL) {
    return dispatch => {
      dispatch(fetchRocksDataBegin());
      return fetch({rocksURL})
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchRocksDataSuccess(json.rocksdata));
          return json.rocksdata;
        })
        .catch(error => dispatch(fetchRocksDataFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }