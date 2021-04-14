import {ADD_FAVORITE} from '../types';

const intialState = {
  favorites: [],
};

export const favoriteReducer = (state = intialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_FAVORITE:
      return {
        favorites: [...state.favorites, payload],
      };
    default:
      return state;
  }
};
