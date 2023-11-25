import FourthBlockWalker from "./FourthBlockWalker";
import data from "./data";
import "./FourthBlock.css"
import {useState} from "react";

function FourthBlock() {
    const [item1,setActive1] = useState(true)
    const [item2,setActive2] = useState(false)
    const [item3,setActive3] = useState(false)
    const [item4,setActive4] = useState(false)

    const setFalse = ()=>{
        switch (true){
            case item1:
                setActive1(false)
                break
            case item2:
                setActive2(false)
                break
            case item3:
                setActive3(false)
                break
            case item4:
                setActive4(false)
                break
            default:
        }
    }
    const onClickItem1 = ()=> {
        setFalse()
        setActive1(true)
    }
    const onClickItem2 = ()=> {
        setFalse()
        setActive2(true)
    }
    const onClickItem3 = ()=> {
        setFalse()
        setActive3(true)
    }
    const onClickItem4 = ()=> {
        setActive4(false)
    }

    const activeStylesItem1 = item1 ? "active-fourth-block-item" : "fourth-block-item"
    const activeStylesItem2 = item2 ? "active-fourth-block-item" : "fourth-block-item"
    const activeStylesItem3 = item3 ? "active-fourth-block-item" : "fourth-block-item"

    const setStyleText1 = item1 ? "active-text" : "fourth-block-text"
    const setStyleText2 = item2 ? "active-text" : "fourth-block-text"
    const setStyleText3 = item3 ? "active-text" : "fourth-block-text"
    return (
        <>
            <div className="fourth-block">
                <FourthBlockWalker title={data[0].title} text={data[0].text} styles={activeStylesItem1} action={onClickItem1} styleText={setStyleText1}/>
                <FourthBlockWalker title={data[1].title} text={data[1].text} styles={activeStylesItem2} action={onClickItem2} styleText={setStyleText2}/>
                <FourthBlockWalker title={data[2].title} text={data[2].text} styles={activeStylesItem3} action={onClickItem3} styleText={setStyleText3}/>
                <FourthBlockWalker title={data[3].title} text={data[3].text} styles="fourth-block-item" action={onClickItem4} styleText="fourth-block-text"/>
            </div>
            <div className="between-blocks"></div>
        </>
    )
}

export default FourthBlock