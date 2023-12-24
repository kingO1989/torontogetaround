import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./Helpers/Context";

const CheckBox = ({ url, checkedState, isParent, setInitialCheckedState }) => {
    const [isChecked, setIsChecked] = useState(checkedState);
    const [isAParent, setIsAParent] = useState(isParent);
    const { Layers, addFeatureLayer, removeFeatureLayer } = useContext(AppContext);

    const ref = useRef();

    function setToRemoveLayer(truthy) {
        if (isAParent) {
            setInitialCheckedState(truthy)
            setIsChecked(truthy)

            //unCheckAllChildren();


            Layers.map(layer => removeFeatureLayer(layer));

        }
        else {
            setIsChecked(truthy)
            if (Layers[url]) {
                removeFeatureLayer(Layers[url])

            }
        }

        // setUpdatedLayers(["remove", url])
    }

    function setToAddLayer(truthy) {
        if (isAParent) {
            setIsChecked(truthy)
            // CheckAllChildren();
            setInitialCheckedState(truthy)
            Layers.map(layer => addFeatureLayer(layer));

        }
        else {
            setIsChecked(truthy)
            if (Layers[url]) {
                addFeatureLayer(Layers[url])
            }
        }

        // setUpdatedLayers(["add", url])
    }
    function handleChecked() {

        //setIsChecked(!isChecked);

        isChecked ?
            setToRemoveLayer(false)
            :
            setToAddLayer(true)
        // if(isChecked)


    }

    useEffect(() => {
        ref.current = isChecked;
        if (isChecked === true) {
            //set feature layerurl to add to map
        }

        else {

        }
    }, [isChecked])

    return <><input type="checkbox" checked={isChecked} onChange={handleChecked} /></>

}


export default CheckBox;
