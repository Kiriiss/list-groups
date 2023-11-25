function FourthBlockWalker({title,text,styles,action,styleText}){
    return (
        <div className={styles} onClick={action}>
            <div className="fourth-block-title">{title}</div>
            <div className={styleText}>{text}</div>
        </div>
    )
}

export default FourthBlockWalker