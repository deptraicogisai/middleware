import * as Constant from '../constant/actionTypes'
import {put, takeLatest, call} from 'redux-saga/effects';
import {FetchDataServiceInstance} from "../service/fetch-service";
import {hideLoading, showLoading} from "react-redux-loading-bar";

function* getPosts(action) {
    try {
        yield  put(showLoading());

        const result = yield call(FetchDataServiceInstance.GetListPost);

        yield put({type: Constant.FETCH_DATA_SUCCESS, posts: result});

        yield  put(hideLoading());
    } catch (error) {
        put({type: Constant.FETCH_DATA_FAIL})
    }
}

function* getDetailPost(action) {
    try {
        const result = yield call(FetchDataServiceInstance.ViewDetail, action.id);

        yield put({type: Constant.VIEW_DETAIL, detail: result});
    } catch (error) {
        put({type: Constant.FETCH_DATA_FAIL})
    }
}

export function* MediaDataRequest() {
    yield takeLatest(Constant.FETCH_DATA, getPosts)

    yield takeLatest(Constant.DO_DETAIL, getDetailPost)
}
