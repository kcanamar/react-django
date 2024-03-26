import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aPet = useLoaderData()
    const id = aPet?.url.split("/")[4]

    return (
        <div >
          <h1>{aPet.name}</h1>
          <h2>{aPet.age}</h2>

          <div style={{ textAlign: "center" }}>
            <Form action={`/update/${id}/`} method="post">
                <label htmlFor="name">Rename your pet
                    <input type="text" id="name" name="name" defaultValue={aPet.name}></input>
                </label>
                <label htmlFor="age">Did they have a Birthday?
                  <input type="number" id="age" name="age" defaultValue={aPet.age}></input>
                </label>
                <button style={{"backgroundColor": "blue"}}>Update Pets Info</button>
            </Form>
            <Form action={`/delete/${id}`} method="post">
              <button style={{"backgroundColor": "green"}}>Release Pet</button>
            </Form>
          </div>
          <Link to="/">
            <button style={{"backgroundColor": "red"}}>Go Back</button>
          </Link>
        </div>
    );

}