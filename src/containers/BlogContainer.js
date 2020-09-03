import React, {useState, useEffect} from 'react'

function BlogContainer() {
    const [mediumPosts, setMediumPosts] = useState([])

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kmarks2013")
            .then(res => res.json())
            .then(data => {
                let posts = data.items.filter(article => article.categories.length > 0)
                setMediumPosts(posts)
                console.log(posts)
            })
    },[])

    return (
        <div id='blog'>
            <p>Blogs</p>
        </div>
    )
}

export default BlogContainer
