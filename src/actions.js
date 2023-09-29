import url from "./url"
import { redirect } from "react-router-dom";

//create action
export const createAction = async({request}) => {
    //parse form data
    const formData = await request.formData();

    //construct body for call
    const newSet = {
        name: formData.get("name"),
        cost: formData.get("cost"),
        link: formData.get("link"),
        description: formData.get("description")
    }

    //make post request to url
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSet)
    })

    return redirect("/")
}

//update action
export const updateAction = async({request, params}) => {
    //get id
    const id = params.id

    //parse data
    const formData = await request.formData();

    //construct body for call
    const updatedSet = {
        name: formData.get("name"),
        cost: formData.get("cost"),
        link: formData.get("link"),
        description: formData.get("description")
    }

    //make request to update
    await fetch(url+id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSet)
    })

    //redirect to show
    return redirect(`/${id}`)
}

//delete action
export const deleteAction = async({params}) => {
    // grabbing id from params
    const id = params.id
    
    //making request to delete x
    await fetch(url+id, {
        method: "delete"
    })

    //redirect 
    return redirect("/")
}