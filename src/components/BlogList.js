function BlogList (props) {

    const data = props.data


    let counter = 0

    function amountOfBlogs() {
        for (let i = 0; i < data.length; i++) {
            counter = counter + 1
            // console.log("doet counter iets?", counter)
        }
        return counter

    }

    const blogs = amountOfBlogs(data)
    // console.log("aantal",blogs)

    const titels = props.titles
    const listItems = titels.map((titel) => <li key={titel.toString()}>{titel}</li>)

    return (
        <>
            <h2>Aantal blogs:</h2>
            <ul>{blogs}</ul>
            <h2>Titels</h2>
            <ul>{listItems}</ul>
        </>
    )
}

export default BlogList