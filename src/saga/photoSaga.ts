import * as Constant from '../constant/actionTypes'
import {put, takeLatest, call} from 'redux-saga/effects';
import {PostServiceInstance} from "../service/fetch-service";

function* getPhotos() {
    try {
        const result = yield call(PostServiceInstance.GetListPhoto);

        yield put({type: Constant.FETCH_DATA_PHOTO_SUCCESS, responseData: result});
    } catch (error) {
        put({type: Constant.FETCH_DATA_FAIL})
    }
}

export function* PhotoRequest() {
    yield takeLatest(Constant.FETCH_DATA_PHOTO, getPhotos)

}
