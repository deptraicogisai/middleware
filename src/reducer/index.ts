import {combineReducers} from "redux";
import posts from '../reducer/postReducer'
import photos from '../reducer/photoReducer'
import block from '../reducer/blockReducer'
import books from '../reducer/bookReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    posts,
    photos,
    block,
    books,
    loadingBar: loadingBarReducer,
})