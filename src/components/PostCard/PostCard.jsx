import style from "./PostCard.module.css"
import Button from "../Button/Button.jsx"
import placeHolderImage from "../../assets/placeholder.png"
import Tags from "../Tags/Tags.jsx"

function PostCard({ image, title, tags, content }) {

    return (
        <div className={style.card}>
            <img className={style.thumbnail} src={image || placeHolderImage} />
            <div className={style.card_body}>
                <h3>{title}</h3>
                <ul className={style.tags}>
                    {/* {tags.map(tag => (
                        <li key={tag.id} className={`${style.tag_item} ${style[tag]}`}>{tag}</li>
                    ))} */}
                    <Tags tags={tags} />
                </ul>
                <p>{content}</p>
                <Button />
            </div>
        </div>
    )
}

export default PostCard