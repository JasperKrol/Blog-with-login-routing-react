import BlogList from "../components/BlogList";
function BlogOverzicht(props) {
    // console.log("what are the props", props)
    const data = props.posts

    // titels omhoog krijgen
    const titels = data.map(a => a.title)

    return (
        <>
            <h1>Hier komt een overzicht</h1>
            <BlogList
                data={data}
                titles={titels}
            />
        </>

    )
}

export default BlogOverzicht