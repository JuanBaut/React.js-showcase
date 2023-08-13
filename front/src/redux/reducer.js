import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from './action-types';


const initialState = {
    myFavorites: [],
    allFavCharacters: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allFavCharacters, payload],
                allFavCharacters: [...state.allFavCharacters, payload]
            };

        case REMOVE_FAV:
            const updatedFavorites = state.allFavCharacters.filter(fav => fav.id !== payload);
            return {
                ...state,
                myFavorites: updatedFavorites
            };

        case FILTER:
            let filteredFavorites = [...state.allFavCharacters];

            if (payload !== 'allFav') {
                filteredFavorites = filteredFavorites.filter(character => character.gender === payload);
            }

            return {
                ...state,
                myFavorites: filteredFavorites
            };

        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
        //     };

        // case FILTER:
        //     const allFavCharactersFilter = state.allFavCharacters.filter(character => character.gender === payload);
        //     if ('allFav' === payload)
        //         return {
        //             ...state,
        //             myFavorites: [...state.allFavCharacters]
        //         };
        //     else
        //         return {
        //             ...state,
        //             myFavorites: allFavCharactersFilter
        //         };

        case ORDER:
            const allFavCharactersCopy = [...state.allFavCharacters];
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                        ? allFavCharactersCopy.sort((a, b) => a.id - b.id)
                        : allFavCharactersCopy.sort((a, b) => b.id - a.id)
            };

        default:
            return { ...state };
    }
};

export default reducer;