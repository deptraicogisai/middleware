import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from "../reducer/photoReducer";
import {PhotoRequest} from "../saga/photoSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(PhotoRequest);

export default store;