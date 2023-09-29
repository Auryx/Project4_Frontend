import {Link} from "react-router-dom"

function Post ({post}){

    const div ={
        textAlign: 'center',
        margin: '10px auto',
        width: '75%'
    }

    return <div style={div}>
        <Link to={`/${post.id}`}>
            <h1>{post.name}</h1>
            <p>{post.cost}</p>
        </Link>
    </div>
}

export default Post