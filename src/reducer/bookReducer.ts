import {Book} from "../model/book";
import * as Constant from '../constant/actionTypes';

interface thisState {
    books?: Book[]
}

export default function (state: thisState = {}, action) {
    switch (action.type) {
        case Constant.SEARCH_BOOK_COMPLETED:
            let {books} = action;
            return {...state, books};

        case Constant.RESET_STATE:
            return {...state, books: {}};
    }

    return state;
}