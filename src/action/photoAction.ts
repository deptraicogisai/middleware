import * as Constant from '../constant/actionTypes'

export const FetchData = () => ({
    type: Constant.FETCH_DATA_PHOTO
});

export const ResetState = () => {
    return {
        type: Constant.RESET_STATE
    }
}