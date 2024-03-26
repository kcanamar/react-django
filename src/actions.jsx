import { redirect } from "react-router-dom";

const URL=import.meta.env.VITE_BASE_URL

// createAction will create a pet from form submission to /create
export const createAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()
    
    // construct request body
    const newPet = {
        name: formData.get("name"),
        age: formData.get("age")
    }

    // send request to the backend
    await fetch(`${URL}/pets/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPet)
    })

    // redirect back to the index
    return redirect("/")
}

// updateAction will update a pet from form submission to `/update/:id/`
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()

    // get the pet id
    const id = params.id

    // construct the request body
    const updatedPet = {
        name: formData.get("name"),
        age: formData.get("age")
    }

    // send the request body to the backend
    await fetch(`${URL}/pets/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPet)
    })

    // redirect back to the show page
    return redirect(`/pet/${id}`)
}

// deleteAction delete a pet from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    console.log("here")
    // get pet id
    const id = params.id
    // send the request to the backend
    await fetch(`${URL}/pets/${id}`, {
        method: "delete"
    })

    // redirect to index page
    return redirect("/")
}