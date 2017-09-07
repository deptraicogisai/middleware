import * as Constant from '../constant/actionTypes'
import {put, takeLatest, call} from 'redux-saga/effects';
import {FetchDataServiceInstance} from "../service/fetch-service";
import { showLoading, hideLoading } from 'react-redux-loading-bar'

function* getPhotos() {
    try {
        yield  put(showLoading());

        const result = yield call(FetchDataServiceInstance.GetListPhoto);

        yield put({type: Constant.FETCH_DATA_PHOTO_SUCCESS, responseData: result});

        yield  put(hideLoading());

    } catch (error) {
        put({type: Constant.FETCH_DATA_FAIL})
    }
}

export function* PhotoRequest() {
    yield takeLatest(Constant.FETCH_DATA_PHOTO, getPhotos)

}
