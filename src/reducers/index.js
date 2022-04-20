import { combineReducers } from "redux";
import filmReucer from './filmReducer';
import detailFilmReducer from './detailFilmRed';

export const rootReducer = combineReducers({
    films: filmReucer,
    detail: detailFilmReducer,
    
})