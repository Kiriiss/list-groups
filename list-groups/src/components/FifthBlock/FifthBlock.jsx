import {useState} from "react";
import data from "../FourthBlock/data";
import FifthBlockWalker from "./FifthBlockWalker";
import './FifthBlock.css'
function FifthBlock(){
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
                break
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

    const activeStylesItem1 = item1 ? "active-fifth-block-item" : "fifth-block-item"
    const activeStylesItem2 = item2 ? "active-fifth-block-item" : "fifth-block-item"
    const activeStylesItem3 = item3 ? "active-fifth-block-item" : "fifth-block-item"
    const activeStylesItem4 = item4 ? "active-fifth-block-item" : "fifth-block-item"

    const activeStylesBlockRadio1 = item1 ? "circle-button-fifth-block" : "block-radio"
    const activeStylesBlockRadio2 = item2 ? "circle-button-fifth-block" : "block-radio"
    const activeStylesBlockRadio3 = item3 ? "circle-button-fifth-block" : "block-radio"

    return (
        <>
            <div className="fifth-block">
                <FifthBlockWalker title={data[0].title} text={data[0].text} styles={activeStylesItem1} action={onClickItem1}  styleBlockRadio={activeStylesBlockRadio1}/>
                <FifthBlockWalker title={data[1].title} text={data[1].text} styles={activeStylesItem2} action={onClickItem2}  styleBlockRadio={activeStylesBlockRadio2}/>
                <FifthBlockWalker title={data[2].title} text={data[2].text} styles={activeStylesItem3} action={onClickItem3}  styleBlockRadio={activeStylesBlockRadio3}/>
                <FifthBlockWalker title={data[3].title} text={data[3].text} styles={activeStylesItem4} action={onClickItem4}  styleBlockRadio="block-radio" />
            </div>
        </>
    )
}

export default FifthBlock