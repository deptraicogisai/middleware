import * as Constant from '../constant/actionTypes'
import {put, takeLatest, call} from 'redux-saga/effects';
import {FetchDataServiceInstance} from "../service/fetch-service";

function* searchBook(action) {
    try {
        const result = yield call(FetchDataServiceInstance.SearchBook, action.searchQuery, action.maxResult);

        yield put({type: Constant.SEARCH_BOOK_COMPLETED, books: result});

    } catch (error) {
        put({type: Constant.FETCH_DATA_FAIL})
    }
}

export function* SearchBookRequest() {
    yield takeLatest(Constant.SEARCH_BOOK, searchBook);

}
