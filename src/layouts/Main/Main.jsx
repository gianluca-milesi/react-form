import style from "./Main.module.css"
import PostCard from "../../components/PostCard/PostCard.jsx"
import posts from "../../data/posts.js"
import Tags from "../../components/Tags/Tags.jsx"

function Main() {

    const publishedPosts = posts.filter((post) => post.published === true)


    const tags = []
    posts.forEach(post => {

        const postTags = post.tags
        console.log(postTags)

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
                        <form action="">
                            <input type="text" placeholder="Titolo del post"/>
                            <input type="submit" />
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