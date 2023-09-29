import Post from "../components/Post"
import { useLoaderData } from "react-router-dom"

function Index (props){

    // fetch loaderdata from hook
    const dice = useLoaderData()
    // map over & create post comp
    return dice.map((dice) => <Post key={dice.id} post={dice}/>)
    
}

export default Index