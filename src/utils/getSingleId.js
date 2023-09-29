export async function getSingleId(params, url){
    // grab id
    const id = params.id
    // make call
    const response = await fetch(url + id)
    // make json obj
    const die = await response.json()
    // return obj
    return die
}