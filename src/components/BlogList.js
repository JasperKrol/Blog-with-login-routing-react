// import {Link, useParams} from 'react-router-dom';
// import {useHistory} from 'react-router-dom'
// import {useState} from "react";
// import posts from '../data/posts.json';
//
//
// function BlogList(props) {
//     // const params = useParams();
//     // console.log("WELKE PARAMS HEEFT IMAGE GALLERY?", params);
//     //
//     // const data = props.data
//     //
//     // let counter = 0
//     //
//     // function amountOfBlogs() {
//     //     for (let i = 0; i < data.length; i++) {
//     //         counter = counter + 1
//     //         // console.log("doet counter iets?", counter)
//     //     }
//     //     return counter
//     //
//     // }
//     //
//     // const blogs = amountOfBlogs(data)
//     // // console.log("aantal",blogs)
//     //
//     // const titels = props.titles
//     // const listItems = titels.map((titel) => <li key={titel.toString()}>{titel}</li>)
//     //
//     // const history = useHistory()
//     // const [linkClick, setSlinkClick] = useState("")
//     //
//     // function blogToRead() {
//     //     console.log("Wat heeft de gebruiker aangeklikt", linkClick)
//     //     history.push(`/bloglist/${linkClick}`)
//     // }
//
//
//     return (
//         <>
//             <div>
//                 <h2>Aantal blogs:</h2>
//                 {/*<ul>{blogs}</ul>*/}
//             </div>
//
//             <div>
//                 <h2>Titels</h2>
//                 {/*<ul><Link to="/blogposts">{listItems}</Link></ul>*/}
//                 {/*{posts.map(item => <Link to={`/blogposts/${item.id - 1}`}><p>{item.id} {item.title} </p></Link>)}*/}
//             </div>
//         </>
//     )
// }
//
// export default BlogList