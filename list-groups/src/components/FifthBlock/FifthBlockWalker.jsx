function FifthBlockWalker({title,text,styles,action,styleBlockRadio,isDisabled}){
    return (
        <div className={styles} onClick={action} >
            <span className={styleBlockRadio}><input type="radio" className="input-fifth-block" ></input></span>
            <div className="fifth-block-title">{title}</div>
            <div className="fifth-block-text">{text}</div>
        </div>
    )
}

export default FifthBlockWalker