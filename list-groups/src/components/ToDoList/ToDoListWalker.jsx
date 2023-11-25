function ToDoListWalker({title,img,date,styles,action, isDisabled,checked,styleInputBlock}) {
    const styles2 = isDisabled ? styles = styles + " disable" : styles
    return (
        <div className={styles2}>
            <div className="to-do-list-title"><span className={styleInputBlock}><input type="checkbox" className="to-do-list-input" onClick={action} checked={checked} disabled={isDisabled}/></span>{title}</div>
            <div className="to-do-list-date"><img className="first-img"
                                                  src={img}
                                                  alt=""
                                                  width="17" height="17"/>&nbsp;&nbsp;{date}

            </div>
        </div>
    )
}

export default ToDoListWalker