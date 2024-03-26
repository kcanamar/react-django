import Turtle from "../components/Turtle"
import { Form, useLoaderData } from "react-router-dom"

export default function Index(props){
    
    const allPets = useLoaderData()

    return (
        <div>
            <div>
                <h2>Adopt A Pet</h2>
                <Form action="/create" method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="number" name="age" placeholder="Age" />
                    <button>Add New Pet</button>
                </Form>
            </div>
            {allPets?.map((pet, i) => <Turtle pet={pet} key={i} />).reverse()}
        </div>
    )
}