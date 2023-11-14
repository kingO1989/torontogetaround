import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import React, { useEffect, useRef, useState, useContext } from 'react'
import AppContext from "./Helpers/Context";
import esriConfig from '@arcgis/core/config';
const DummyMap = () => {

    const mapRef = useRef();
    esriConfig.assetsPath = "./assets";
    esriConfig.apiKey = "AAPK18e830016dbd40b0af6745daf1b6953exTFDCUwpr9qIlV-BFCsg103Ue7W02PrSQAiA5dpNy2siucAlXxqnjp0pCKggNQeZ";




    useEffect(() => {



        const map = new Map({
            basemap: 'streets-navigation-vector'
        })

        const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-118.805, 34.027],
            zoom: 13
        })

        const vtlLayer = new VectorTileLayer({
            url: "https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Santa_Monica_Mountains_Parcels_VTL/VectorTileServer/"
        });

        const setFeatureLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",

        });

        map.add(setFeatureLayer);
        map.add(vtlLayer);




        return () => {
            if (view) {
                // destroy the map view
                view.destroy()
            }
        };
    }, [])

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

export default DummyMap;
