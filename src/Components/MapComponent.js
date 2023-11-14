import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import React, { useEffect, useRef, useState, useContext } from 'react'
import AppContext from "./Helpers/Context";


import esriConfig from '@arcgis/core/config'
const MapComponent = () => {

    const [chd, setCHD] = useState(

        new FeatureLayer({
            url: "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Community_Housing_Data/FeatureServer",


        })
    );



    const [re, setRE] = useState(



        new FeatureLayer({
            url: "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Renewable_Energy_Installations/FeatureServer",


        })

    );
    const [dwl, setDWL] = useState(


        new FeatureLayer({
            url: "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Drinking_Water_Location_Data/FeatureServer",


        })
    );
    const [prf, setPRF] = useState(


        "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Park_and_Recreation_Facility_Projects/FeatureServer"


    );
    const { updatedLayers, setUpdatedLayers } = useContext(AppContext);
    const [featureLayers, setFeatureLAyer] = useState([
        { id: 1, layer: chd },
        { id: 2, layer: re },
        { id: 3, layer: dwl },
        { id: 4, layer: prf }]);

    const mapRef = useRef();
    esriConfig.assetsPath = "./assets";
    esriConfig.apiKey = "AAPK18e830016dbd40b0af6745daf1b6953exTFDCUwpr9qIlV-BFCsg103Ue7W02PrSQAiA5dpNy2siucAlXxqnjp0pCKggNQeZ";


    const map = new Map({
        basemap: 'streets-navigation-vector'
    })

    const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-118.805, 34.027],
        zoom: 13
    })

    useEffect(() => {
        /*      console.log(updatedLayers + "  vvvv")
             if (updatedLayers[0] === "remove") {
                 map.remove(updatedLayers[1]);
     
             }
             else {
     
             } */
    }, [updatedLayers])
    useEffect(() => {




        featureLayers.map((item) => {

            const setFeatureLayer = new FeatureLayer({
                url: item.layer,
                id: item.id

            })

            map.add(setFeatureLayer);

        })


        return () => {
            if (view) {
                // destroy the map view
                view.destroy()
            }
        };
    }, [featureLayers])

    const mapStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: 0,
    };

    return (
        <div className="map-container" ref={mapRef} style={mapStyle} />
    );
};

export default MapComponent;
