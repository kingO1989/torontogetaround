import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./Helpers/Context";
import ListItem from "./ListItem";



const Lists = () => {


    return (<div>
        <ul>

            <ListItem text={"Infrastructure"} innernodes={[{ text: "communityhousing", url: 0 }, { text: "renewableEnergy", url: 1 }, { text: "DrinkingWaterLoc", url: 2 }, { text: "RenewableEnergyInstallations", url: 3 }]} />
            <ListItem text={"list4"} innernodes={["aaa", "ssss", "ddd", "ffff"]} />

        </ul>
    </div>)

}

export default Lists;