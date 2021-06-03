// import BlogList from "../components/BlogList";
import posts from '../data/posts.json';
import {
    Link
} from "react-router-dom";

function BlogOverzicht() {
    // // console.log("what are the props", props)
    // const data = props.posts
    //
    // // titels omhoog krijgen
    // const titels = data.map(a => a.title)

    return (
        <div className="blogposts">
            <div>
                <h2>Total blogs: {posts.length}</h2>
                {posts.map(item => <Link to={`/blogposts/${item.id - 1}`}><p>{item.id} {item.title} </p></Link>)}
            </div>
        </div>

    )
}

export default BlogOverzicht