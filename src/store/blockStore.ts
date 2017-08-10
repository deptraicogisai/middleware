import reducer from "../reducer/blockReducer";
import {createStore} from "redux";

const blockStore = createStore(reducer)

export  default blockStore;