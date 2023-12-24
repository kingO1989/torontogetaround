import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./Helpers/Context";
import CheckBox from "./CheckBox";

const ListItem = ({ text, url, innernodes, isParent }) => {


    const [toggle, setToggle] = useState('none');
    const [initialCheckedState, setInitialCheckedState] = useState(true);

    function toggleListHandler() {
        if (toggle === 'none') setToggle('block')
        else setToggle('none')

    }







    return (
        <>
            <li >
                {

                    initialCheckedState ?
                        <div>
                            <CheckBox url={url} isParent={true} checkedState={initialCheckedState}

                                setInitialCheckedState={(c) => setInitialCheckedState(c)}
                            />{text} <button onClick={toggleListHandler}> {">"}</button>

                            <ul style={{ display: toggle }}>
                                {innernodes.map((child, id) => {

                                    return <li key={id}> <CheckBox url={child.url} checkedState={true} /> {child.text}</li>

                                })}
                            </ul>

                        </div> : <div>
                            <CheckBox url={url} isParent={true} checkedState={initialCheckedState}

                                setInitialCheckedState={(c) => setInitialCheckedState(c)}

                            />{text}<span></span> <button onClick={toggleListHandler}> {">"}</button>

                            <ul style={{ display: toggle }}>
                                {innernodes.map((child, id) => {

                                    return <li key={id}> <CheckBox url={child.url} checkedState={false} /> {child.text}</li>

                                })}
                            </ul></div>
                }

            </li>
        </>

    )

}


export default ListItem;