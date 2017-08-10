import * as Constant from '../constant/actionTypes'
import {Photo} from "../model/photo";

interface photoState {
    data?: Photo[]
}

export default function (state: photoState = {}, action) {
    switch (action.type) {
        case Constant.FETCH_DATA_PHOTO_SUCCESS:
            state.data = action.responseData;
            break;
    }

    return state;
};