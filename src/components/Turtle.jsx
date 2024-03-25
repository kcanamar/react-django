import { Link } from "react-router-dom"

export default function Turtle({ pet }) {

    // Need to get checky with the id 
    const id = pet.url.split("/")[4]

    return (
        <div>
            <Link to={`/pet/${id}`}>
                <h1>{pet.name}</h1>
            </Link>
        </div>
    )
}