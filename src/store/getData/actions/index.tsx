export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// action creators
export function fetchDataRequest() {
  return { type: FETCH_DATA_REQUEST };
}

export function fetchDataSuccess(item) {
  return { type: FETCH_DATA_SUCCESS, item };
}

export function fetchDataFailure(error) {
  return { type: FETCH_DATA_FAILURE, error };
}
