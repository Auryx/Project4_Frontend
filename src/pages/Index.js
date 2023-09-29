import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom"

function Index (props){

    // fetch loaderdata from hook
    const dice = useLoaderData()
    // map over & create post comp
    return <>
    <div>
        <h2>Create a new Dice Set</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="description" placeholder="Description"/>
            <input type="text" name="cost" placeholder="Cost"/>
            <input type="text" name="link" placeholder="Link"/>
            <button>Submit the new set</button>
        </Form>
    </div>
    {dice.map((dice) => <Post key={dice.id} post={dice}/>)}
    </>
    
}

export default Index