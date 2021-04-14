import {ADD_FAVORITE} from '../types';

export const addFavorite = (data) => (dispatch) => {
  return dispatch({
    type: ADD_FAVORITE,
    payload: data,
  });
};
