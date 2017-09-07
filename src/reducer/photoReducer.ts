import * as Constant from '../constant/actionTypes'
import {Photo} from "../model/photo";

interface photoState {
    photos?: Photo[]
}

export default function (state: photoState = {}, action) {
    switch (action.type) {
        case Constant.FETCH_DATA_PHOTO_SUCCESS:
            return Object.assign({}, state, {photos: action.responseData});

        case Constant.RESET_STATE:
            return {...state, photos: []};
    }

    return state;
};