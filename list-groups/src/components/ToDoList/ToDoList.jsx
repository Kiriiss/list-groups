import "./ToDoList.css"
import ToDoListWalker from "./ToDoListWalker";
import data from "./data";
import {useState} from "react";

function ToDoList() {
    const [item1, setActive1] = useState(true)
    const [item2, setActive2] = useState(false)
    const [item3, setActive3] = useState(false)
    const [item4, setActive4] = useState(false)
    const [checked, setChecked] = useState(true);
    const toggleClass1 = () => {
        setChecked(prev => !prev);
        setActive1(prev => !prev);
    }
    const toggleClass2 = () => {
        setActive2(prev => !prev);
    }
    const toggleClass3 = () => {
        setActive3(prev => !prev);
    }
    const toggleClass4 = () => {
        setActive4(prev => !prev);
    }
    const styles1 = item1 ? "to-do-list__item to-do-list-active":"to-do-list__item ";
    const styles2 = item2 ? "to-do-list__item to-do-list-active":"to-do-list__item ";
    const styles3 = item3 ? "to-do-list__item to-do-list-active":"to-do-list__item ";
    const styles4 = item4 ? "to-do-list__item to-do-list-active":"to-do-list__item ";

    const stylesInputBlock1 = item1 ? "to-do-list-input-block to-do-list-input-block-active":"to-do-list-input-block";
    const stylesInputBlock2 = item2 ? "to-do-list-input-block to-do-list-input-block-active":"to-do-list-input-block";
    const stylesInputBlock3 = item3 ? "to-do-list-input-block to-do-list-input-block-active":"to-do-list-input-block";
    const stylesInputBlock4 = item4 ? "to-do-list-input-block to-do-list-input-block-active":"to-do-list-input-block";

    return (
        <>
            <div className="to-do-list">
                <ToDoListWalker title={data[0].title} img={data[0].img} date={data[0].date} action={toggleClass1} styles={styles1} isDisabled={false} checked={checked} styleInputBlock={stylesInputBlock1}/>
                <ToDoListWalker title={data[1].title} img={data[1].img} date={data[1].date} action={toggleClass2} styles={styles2} isDisabled={false} styleInputBlock={stylesInputBlock2}/>
                <ToDoListWalker title={data[2].title} img={data[2].img} date={data[2].date} action={toggleClass3} styles={styles3} isDisabled={false} styleInputBlock={stylesInputBlock3}/>
                <ToDoListWalker title={data[3].title} img={data[3].img} date={data[3].date} action={toggleClass4} styles={styles4} isDisabled={true} styleInputBlock={stylesInputBlock4}/>
            </div>
            <div className="between-blocks"></div>
        </>
    )
}

export default ToDoList