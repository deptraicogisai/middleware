import * as Constant from '../constant/actionTypes'


interface thisState {
    block: boolean
}

export default function (state: thisState = {block: false}, action) {
    switch (action.type) {
        case Constant.BLOCKING:
            state.block = true;
            break;

        case Constant.UNBLOCKING:
            state.block = false;
            break;
    }

    return state;
};