import React, {useState, useEffect} from 'react'
import BlogList from '../components/BlogList'

function BlogContainer() {
    const [mediumPosts, setMediumPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kmarks2013")
            .then(res => res.json())
            .then(data => {
                let posts = data.items.filter(article => article.categories.length > 0)
                setMediumPosts(posts)
                setIsLoading(false)
            })
            .catch(err=> console.log(err))
    },[])

        return (
            <div id='blog' className='blog-container'>
            { isLoading ? <p>Fetching blogs from Medium!</p> : <BlogList blogs={mediumPosts}/> }
        </div>
    )
}

export default BlogContainer
