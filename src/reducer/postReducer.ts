import * as Constant from '../constant/actionTypes'
import {Post} from "../model/post";

interface mediaState {
    posts?: Post[];
    detail?: Post
}

export default function (state: mediaState = {}, action) {
    switch (action.type) {
        case Constant.FETCH_DATA_SUCCESS:
            const {posts} = action;
            return {...state, posts};
        case Constant.VIEW_DETAIL:
            return Object.assign({}, state, {detail: action.detail});

        case Constant.RESET_STATE:
            return {...state, posts: []};
    }

    return state;
};
