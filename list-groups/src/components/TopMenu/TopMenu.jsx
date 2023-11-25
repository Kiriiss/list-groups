import './TopMenu.css'
import  './TopMenuWalker'
import TopMenuWalker from "./TopMenuWalker";
import data from "./data";
import {useState} from "react";
function TopMenu() {
    const [item1, setActive1] = useState(false)
    const [item2, setActive2] = useState(false)
    const [item3, setActive3] = useState(false)

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
            default:
        }
    }
    const setActiveItem1 = ()=>{
        setFalse()
        setActive1(true)
    }
     const setActiveItem2 = ()=>{
        setFalse()
        setActive2(true)
    }
     const setActiveItem3 = ()=>{
        setFalse()
        setActive3(true)
    }

    const styleItem1 = item1 ? "menu__item active" : "menu__item"
    const styleItem2 = item2 ? "menu__item active" : "menu__item"
    const styleItem3 = item3 ? "menu__item active" : "menu__item"
    return (
        <>
            <div className="top-menu">
                <div className="menu">
                    <TopMenuWalker title={data[0].title} smallText={data[0].smallText} text={data[0].text} action={setActiveItem1} style={styleItem1}/>
                    <TopMenuWalker title={data[1].title} smallText={data[1].smallText} text={data[1].text} action={setActiveItem2} style={styleItem2}/>
                    <TopMenuWalker title={data[2].title} smallText={data[2].smallText} text={data[2].text} action={setActiveItem3} style={styleItem3}/>
                </div>
            </div>
            <div className="between-blocks"></div>
        </>
    )
}

export default TopMenu