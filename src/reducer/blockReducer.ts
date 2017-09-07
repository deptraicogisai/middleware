import * as Constant from '../constant/actionTypes'


interface thisState {
    isLoading: boolean
}

export default function (state: thisState = {isLoading: false}, action) {
    switch (action.type) {
        case Constant.BLOCKING:
            return Object.assign({}, state, {isLoading: true})

        case Constant.UNBLOCKING:
            return Object.assign({}, state, {isLoading: false})
    }

    return state;
};