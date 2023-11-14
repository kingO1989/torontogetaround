import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import ElevationLayer from '@arcgis/core/layers/ElevationLayer';

import Basemap from "@arcgis/core/Basemap.js";
import React, { useEffect, useRef, useState, useContext } from 'react'
import AppContext from "./Helpers/Context";
import esriConfig from '@arcgis/core/config';
const DummyMap = () => {

    const mapRef = useRef();
    esriConfig.assetsPath = "./assets";
    esriConfig.apiKey = "AAPK18e830016dbd40b0af6745daf1b6953exTFDCUwpr9qIlV-BFCsg103Ue7W02PrSQAiA5dpNy2siucAlXxqnjp0pCKggNQeZ";




    useEffect(() => {

        // Create a VectorTileLayer from a style URL
        const mapBaseLayer = new VectorTileLayer({
            url: "https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer"
        });

        const mapBaseLayer2 = new VectorTileLayer({
            url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer"
        });


        // Create a Basemap with the VectorTileLayer
        const customBasemap = new Basemap({
            baseLayers: [mapBaseLayer, mapBaseLayer2],
            title: "Terrain"
        });
        //Then add the custom base map to basemap property of Map
        const map = new Map({

            basemap: {
                baseLayers: [mapBaseLayer2]
            }
        })

        const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-118.805, 34.027],
            zoom: 13
        })


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
