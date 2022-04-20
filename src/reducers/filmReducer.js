import {FILMS_BY_NAME, FILMS_POPULAR} from "./type"

const initialState = []

const filmReucer = (films = initialState,action)=>{

    const {type, payload} = action

    switch(type){
        case FILMS_BY_NAME:
            return payload
        case FILMS_POPULAR:
            return payload
        default:
            return films
    }
}

export default filmReucer;