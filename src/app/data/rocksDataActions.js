export const FETCH_ROCKSDATA_BEGIN   = 'FETCH_ROCKSDATA_BEGIN';
export const FETCH_ROCKSDATA_SUCCESS = 'FETCH_ROCKSDATA_SUCCESS';
export const FETCH_ROCKSDATA_FAILURE = 'FETCH_ROCKSDATA_FAILURE';

export const fetchRocksDataBegin = () => ({
  type: FETCH_ROCKSDATA_BEGIN
});

export const fetchRocksDataSuccess = rocksdata => ({
  type: FETCH_ROCKSDATA_SUCCESS,
  payload: { rocksdata }
});

export const fetchRocksDataFailure = error => ({
  type: FETCH_ROCKSDATA_FAILURE,
  payload: { error }
});

