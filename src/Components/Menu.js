
import { useState, useEffect } from "react";
import TabItemDisplay from "./TabItemDisplay";
import Lists from "./Lists";


const Menu = () => {

    const [clickedTab, setClickedTab] = useState();


    function clickTabHandler(e) {
        //check which tab was clicked
        //when clicked display box value should change

        // console.log(e.target.attributes.class.nodeValue)

        let clickedValue = e.target.attributes.class.nodeValue;
        setClickedTab(clickedValue)


    }
    return (
        <>

            <div class="tab">
                <button className="Home" onClick={clickTabHandler}>Home</button>
                <button className="About" onClick={clickTabHandler}>About</button>
                <button className="Layers" onClick={clickTabHandler}>Layers</button>
                <button className="Legend" onClick={clickTabHandler}>Legend</button>
            </div>


            <div id="London" class="tabcontent">

                {clickedTab ?
                    <TabItemDisplay value={clickedTab} />
                    : ""}

            </div>

            <Lists />



        </>
    );

}

export default Menu;