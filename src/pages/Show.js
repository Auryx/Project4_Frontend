import {Link, useLoaderData} from "react-router-dom"

function Show (props){
    const post = useLoaderData()

    const div = {
        textAlign: 'center',
        margin: '10px auto',
        width: '75%'
    }

    return <div style={div}>
        <h1>{post.name}</h1>
        <p>{post.description}</p>
        <p>{post.cost}</p>
        <a href={post.link}>Click here to go to the website!</a>
        <p></p>
        <Link to="/">Back to Index</Link>
    </div>
}

export default Show