import url from './url'

export const indexLoader = async () => {
    // make call
    const response = await fetch(url)
    // turn response into JS obj
    const dice = await response.json()
    // return object
    return dice
}

export const showLoader = async ({params}) => {
    // grab id
    const id = params.id
    // make call
    const response = await fetch(url + id)
    // make json obj
    const die = await response.json()
    // return obj
    return die
}