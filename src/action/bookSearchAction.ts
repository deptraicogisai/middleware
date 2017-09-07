import * as Constant from '../constant/actionTypes'

export const SearchBook = (query: string, maxResult: number) => {
    return {
        type: Constant.SEARCH_BOOK,
        searchQuery: query,
        maxResult: maxResult
    }
}

export const ResetState = () => {
    return {
        type: Constant.RESET_STATE
    }
}