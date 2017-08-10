import * as Constant from '../constant/actionTypes'
import {Post} from "../model/post";

interface mediaState {
    data?: Post[];
    detail?: Post
}

export default function (state: mediaState = {}, action) {
    switch (action.type) {
        case Constant.FETCH_DATA_SUCCESS:
            state.data = action.responseData;
            break
        case Constant.VIEW_DETAIL:
            state.detail = action.detail;
            break
    }

    return state;
};