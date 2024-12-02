import style from "./Card.module.css"
import placeholder from "../../assets/placeholder.png"
import Tags from "../Tags/Tags.jsx"

function Card({ item }) {

    const { title, image, content, tags } = item

    return (
        <div className={style.card}>
            <img className={style.card_figure} src={image || placeholder} />
            <div className={style.card_body}>
                <h2>{title}</h2>
                <Tags tags={tags} />
                <p>{content}</p>
                <button className={style.button}>Leggi di più</button>
            </div>
        </div>
    )
}

export default Card