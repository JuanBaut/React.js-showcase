import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, RESET } from './action-types';

const initialState = {
    myFav: [], //rendered
    myFavCopy: [] //backup
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFav: [...state.myFav, payload],
                myFavCopy: [...state.myFavCopy, payload]
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFav: state.myFav.filter(fav => fav.id !== payload),
                myFavCopy: state.myFavCopy.filter(fav => fav.id !== payload)
            };

        case FILTER:
            let filteredFav = [...state.myFavCopy];
            filteredFav = filteredFav.filter(character => character.gender === payload);

            return {
                ...state,
                myFav: filteredFav
            };

        case ORDER:
            const allFavCharactersCopy = [...state.myFav];
            return {
                ...state,
                myFav:
                    payload === 'A'
                        ? allFavCharactersCopy.sort((a, b) => a.id - b.id)
                        : allFavCharactersCopy.sort((a, b) => b.id - a.id)
            };

        case RESET:
            return {
                ...state,
                myFav: state.myFavCopy
            };

        default:
            return { ...state };
    }
};

export default reducer;