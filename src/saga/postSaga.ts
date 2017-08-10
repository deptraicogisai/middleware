import * as Constant from '../constant/actionTypes'
import {put, takeLatest, call} from 'redux-saga/effects';
import {PostServiceInstance} from "../service/fetch-service";

function* getPosts(action) {
    try {
        const result = yield call(PostServiceInstance.GetListPost);

        yield put({type: Constant.FETCH_DATA_SUCCESS, responseData: result});
    } catch (error) {
        put({type: Constant.FETCH_DATA_FAIL})
    }
}

function* getDetailPost(action) {
    try {
        const result = yield call(PostServiceInstance.ViewDetail, action.id);

        yield put({type: Constant.VIEW_DETAIL, detail: result});
    } catch (error) {
        put({type: Constant.FETCH_DATA_FAIL})
    }
}

export function* MediaDataRequest() {
    yield takeLatest(Constant.FETCH_DATA, getPosts)

    yield takeLatest(Constant.DO_DETAIL, getDetailPost)
}
