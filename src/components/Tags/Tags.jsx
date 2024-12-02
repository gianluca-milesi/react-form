import style from "./Tags.module.css"

function Tags({ className, tags = [] }) {

    return (
        <ul className={`${style.tags} ${className}`}>
            {tags.map((tag) => (
                // <li style={{ backgroundColor: tagColors[tag] }} className={`${style.tag_item}`} key={tag}>{tag}</li>
                <li className={`${style.tag_item} ${style[tag]}`} key={tag}>{tag}</li>
            ))}
        </ul>
    )
}
export default Tags