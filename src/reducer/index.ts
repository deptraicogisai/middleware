import {combineReducers} from "redux";
import posts from '../reducer/postReducer'
import photos from '../reducer/photoReducer'

export default combineReducers({
    posts,
    photos
})