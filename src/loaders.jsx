// How to use .env variables w/ Vite import.meta.env.<VARIABLE_NAME> 
// https://vitejs.dev/guide/env-and-mode.html
// const URL = "https://drf-animals.onrender.com"
const URL = import.meta.env.VITE_BASE_URL
console.log(URL)

// index loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}/pets/`)
    const allPets = await response.json()
    return allPets
}

// show Loader
export const showLoader = async({params}) => {
    const response = await fetch(`${URL}/pets/${params.id}`)
    const aPet = await response.json()
    return aPet
}