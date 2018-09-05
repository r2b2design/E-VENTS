import { LOGIN_ROCKS } from './rocksConstants';
import { createReducer } from '../../../app/common/util/reducerUtil';

const initialState = {
  rocksProfile: {}
}

export const loginRocks = (state, payload) => {
  return {
    ...state,
    rocksProfile: payload.user
  }
}


export default createReducer(initialState, {
  [LOGIN_ROCKS]: loginRocks
})