import url from './url'
import {getSingleId} from "./utils/getSingleId"

export const indexLoader = async () => {
    // make call
    const response = await fetch(url)
    // turn response into JS obj
    const dice = await response.json()
    // return object
    return dice
}

export const showLoader = async ({params}) => {
    return getSingleId(params, url)
}