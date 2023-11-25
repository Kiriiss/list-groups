function SecondBlockWalker2({typeInput,title,text,action,styles ,isChecked}) {
    return (
        <div className="block__item">
            <div className="second-title"><span className={styles}><input type={typeInput} checked={isChecked} className="input-checkbox input-second-block radio" onClick={action} ></input></span> {title}</div>
            <div className="second-text">{text}</div>
        </div>
    )
}

export default SecondBlockWalker2