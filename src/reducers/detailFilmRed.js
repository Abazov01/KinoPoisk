import {CLEAR_FILM, FILM_DETAIL} from "./type"

const initialState = []

const detailFilmReducer = (film = initialState,action)=>{

    const {type, payload} = action

    switch(type){
        case FILM_DETAIL:
            return payload

        default:
            return film
    }
}

export default detailFilmReducer;