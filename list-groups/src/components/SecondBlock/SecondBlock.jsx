import "./SecondBlock.css"
import SecondBlockWalker1 from "./SecondBlockWalker1";
import dataOneBlock from "./dataOneBlock";
import dataTwoBlock from "./dataTwoBlock";
import SecondBlockWalker2 from "./SecondBlockWalker2";
import {useState} from "react";


function SecondBlock() {
    const [item1,setActive1] = useState(false)
    const [item2,setActive2] = useState(false)
    const [item3,setActive3] = useState(false)
    const [item4,setActive4] = useState(true)
    const [item5,setActive5] = useState(false)
    const [item6,setActive6] = useState(false)

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
            case item5:
                setActive5(false)
                break
            case item6:
                setActive6(false)
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
        setFalse()
        setActive4(true)
    }
    const onClickItem5 = ()=> {
        setFalse()
        setActive5(true)
    }
    const onClickItem6 = ()=> {
        setFalse()
        setActive6(true)
    }

    const stylesItem1 = item1 ? "block-button" : "inactive-block"
    const stylesItem2 = item2 ? "block-button" : "inactive-block"
    const stylesItem3 = item3 ? "block-button" : "inactive-block"

    const stylesItem4 = item4 ? "circle-button" : "inactive-circle"
    const stylesItem5 = item5 ? "circle-button" : "inactive-circle"
    const stylesItem6 = item6 ? "circle-button" : "inactive-circle"
    return (
        <>
            <div className="block">
                <div className="one-block blocks">
                    <SecondBlockWalker1 typeInput={dataOneBlock[0].typeInput} title={dataOneBlock[0].title} text={dataOneBlock[0].text} action={onClickItem1} styles={stylesItem1} isChecked/>
                    <SecondBlockWalker1 typeInput={dataOneBlock[1].typeInput} title={dataOneBlock[1].title} text={dataOneBlock[1].text} action={onClickItem2} styles={stylesItem2}/>
                    <SecondBlockWalker1 typeInput={dataOneBlock[2].typeInput} title={dataOneBlock[2].title} text={dataOneBlock[2].text} action={onClickItem3} styles={stylesItem3}/>

                </div>
                <div className="two-block blocks">
                    <SecondBlockWalker2 typeInput={dataTwoBlock[0].typeInput} title={dataTwoBlock[0].title} text={dataTwoBlock[0].text} action={onClickItem4} styles={stylesItem4} isChecked />
                    <SecondBlockWalker2 typeInput={dataTwoBlock[1].typeInput} title={dataTwoBlock[1].title} text={dataTwoBlock[1].text} action={onClickItem5} styles={stylesItem5}/>
                    <SecondBlockWalker2 typeInput={dataTwoBlock[2].typeInput} title={dataTwoBlock[2].title} text={dataTwoBlock[2].text} action={onClickItem6} styles={stylesItem6}/>

                </div>
            </div>
            <div className="between-blocks"></div>
        </>
    )
}

export default SecondBlock