import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from '../actions';
import axios from 'axios';

export function getData() {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(fetchDataRequest());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    return axios
      .get('http://localhost:3002/data')
      .then((response) => response.data)
      .then((json) =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(fetchDataSuccess(json))
      )
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
}
