function TopMenuWalker({title, smallText, text, action, style}) {
    return (
        <div className={style} onClick={action}>
            <div className="title">{title}</div>
            <span className="small-text">{smallText}</span>
            <div className="text">{text}</div>
        </div>
    )
}

export default TopMenuWalker