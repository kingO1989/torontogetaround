import { useState, useEffect, useContext } from "react";
import AppContext from "./Helpers/Context";


const CheckBox = ({ url }) => {
    const [isChecked, setIsChecked] = useState(false);
    const { updatedLayers, setUpdatedLayers } = useContext(AppContext);


    function setToRemoveLayer(truthy) {
        setIsChecked(truthy)
        setUpdatedLayers(["remove", url])
    }

    function setToAddLayer(truthy) {
        setIsChecked(truthy)
        setUpdatedLayers(["add", url])
    }
    function handleChecked() {
        console.log("This ran")
        //setIsChecked(!isChecked);

        isChecked ?
            setToRemoveLayer(false)
            :
            setToAddLayer(true)
        // if(isChecked)


    }

    useEffect(() => {
        console.log(isChecked);
        if (isChecked === true) {
            alert(url);
            console.log(url)
            //set feature layerurl to add to map
        }

        else {
            //remove feature layerurl
        }
    }, [isChecked])

    return <><input type="checkbox" checked={isChecked} onChange={handleChecked} /></>

}


const ListItem = ({ text, url, children }) => {


    const [toggle, setToggle] = useState(false);


    function toggleListHandler() {

        setToggle(true)

    }


    return (<>
        <li >
            <CheckBox url={url} />
            {text} ...... <button onClick={toggleListHandler}> {">"}</button>
            {toggle ? <>
                <ul>
                    {children.map((child, id) => {

                        return <li key={id}> <CheckBox url={child.url} /> {child.text}</li>

                    })}
                </ul>
            </> : ""}
        </li>
    </>)

}

const Lists = () => {


    return (<div>
        <ul>

            <ListItem text={"list3"} url={1} children={[{ text: "111", url: 2 }, { text: "222", url: 3 }, { text: "333", url: 4 }, { text: "444", url: 5 }]} />
            <ListItem text={"list4"} children={["aaa", "ssss", "ddd", "ffff"]} />

        </ul>
    </div>)

}

export default Lists;