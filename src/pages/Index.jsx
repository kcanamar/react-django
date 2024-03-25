import Turtle from "../components/Turtle"
import { useLoaderData } from "react-router-dom"

export default function Index(props){
    
    const allPets = useLoaderData()

    return allPets.map((pet, i) => <Turtle pet={pet} key={i} />)
}