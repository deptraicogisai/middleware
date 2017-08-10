import * as Constant from '../constant/actionTypes'

export const FetchData = () => ({
    type: Constant.FETCH_DATA
});


export const ViewDetail = (id: number) => ({
    type: Constant.DO_DETAIL,
    id: id
});