import {combineReducers} from 'redux';
import {favoriteReducer} from './favorite';

export default combineReducers({favorites: favoriteReducer});
