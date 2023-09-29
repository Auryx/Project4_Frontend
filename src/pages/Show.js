import {Link, useLoaderData, Form} from "react-router-dom"

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
        <div>
        <h2>Update the Dice Set</h2>
        <Form method="post" action={`/update/${post.id}`}>
            <input type="text" name="name" defaultValue={`${post.name}`}/>
            <input type="text" name="description" defaultValue={`${post.description}`}/>
            <input type="text" name="cost" defaultValue={`${post.cost}`}/>
            <input type="text" name="link" defaultValue={`${post.link}`}/>
            <button>Submit the Updated set</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Set</button>
        </Form>
    </div>
    </div>
}

export default Show