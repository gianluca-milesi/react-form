import style from "./Main.module.css"
import PostCard from "../../components/PostCard/PostCard.jsx"
import posts from "../../data/posts.js"
import initialPosts from "../../data/posts.js"
import Tags from "../../components/Tags/Tags.jsx"
import { useState } from "react"

function Main() {

    const publishedPosts = posts.filter((post) => post.published === true)


    const [allPosts, setAllPosts] = useState(initialPosts)
    const [title, setTitle] = useState("Pinguino")

    function onSubmit(event) {
        event.preventDefault()

        const newTitle = title.trim()

        const newPost = {
            title: newTitle,
            image: undefined,
            content: "content",
            tags: [],
            published: true
        }

        setAllPosts([...publishedPosts, newPost])
        // console.log(newPost)
        console.log(allPosts)
    }


    const tags = []
    posts.forEach(post => {

        const postTags = post.tags
        // console.log(postTags)

        postTags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })


    return (
        <>
            <main>
                <section className={style.form_section}>
                    <div className="container">
                        <p>Inserisci un nuovo post</p>
                        <form onSubmit={onSubmit} action="">
                            <input type="text" placeholder="Titolo del post" onChange={(event) => setTitle(event.target.value)} value={title} />
                            <input type="submit" value="Aggiungi" />
                        </form>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        {publishedPosts.map((post) => (
                            <div key={post.id} className="col-6">
                                <PostCard title={post.title} image={post.image} content={post.content} tags={post.tags} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Tags tags={tags} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main