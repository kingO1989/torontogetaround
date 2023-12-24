import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import ElevationLayer from '@arcgis/core/layers/ElevationLayer';

import Basemap from "@arcgis/core/Basemap.js";

import WebMap from '@arcgis/core/WebMap';
import Collection from '@arcgis/core/core/Collection';
import React, { useEffect, useRef, useState, useContext } from 'react'
import AppContext from "./Helpers/Context";
import esriConfig from '@arcgis/core/config';
const DummyMap = () => {

    const mapRef = useRef();
    esriConfig.assetsPath = "./assets";
    esriConfig.apiKey = "AAPK18e830016dbd40b0af6745daf1b6953exTFDCUwpr9qIlV-BFCsg103Ue7W02PrSQAiA5dpNy2siucAlXxqnjp0pCKggNQeZ";

    //f758990071b04cc8b55f1a5a49c4a89d


    const asItem = (id) => ({ portalItem: { id } })
    const items = ["f758990071b04cc8b55f1a5a49c4a89d", "8a333092be5b488195ec567f4f8d20d0"]

    function show(...itemlisted) {
        console.log(itemlisted)
    }

    const layerTitles = collections => show(collections.title)
    const handleResults = results => {
        results.map(a => a.allLayers.map(layerTitles))
    }

    const WebMapCollection = Collection.ofType(WebMap);
    const webmaps = new WebMapCollection(items.map(asItem))

    Promise.all(webmaps.map(a => a.load()).toArray()).then(handleResults).catch(show)

    useEffect(() => {
        show(items);
        // Create a VectorTileLayer from a style URL
        const mapBaseLayer = new VectorTileLayer({
            url: "https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer"
        });

        const mapBaseLayer2 = new VectorTileLayer({
            url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer"
        });

        const mapBaseLayerTile1 = new TileLayer({
            url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
        });

        const mapBaseLayerElevation = new ElevationLayer({
            url: "https://elevation.arcgis.com/arcgis/rest/services/WorldElevation/Terrain/ImageServer"
        });
        // Create a Basemap with the VectorTileLayer



        const customBasemaps = new Basemap({
            baseLayers: [mapBaseLayer, mapBaseLayer2],
            title: "Terrain"
        });
        //Then add the custom base map to basemap property of Map



        const map = new Map({

            /*    basemap: {
                   baseLayers: [mapBaseLayerTile1]
               } */

            basemap: {
                baseLayers: [mapBaseLayer]
            },
            ground: {
                layers: [mapBaseLayerElevation]
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
