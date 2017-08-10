import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {MediaDataRequest} from "../saga/postSaga";
import reducer from "../reducer/postReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(MediaDataRequest);

export default store;