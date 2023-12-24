import MapView from '@arcgis/core/views/MapView'
import React, { useEffect, useRef, useContext } from 'react'
import AppContext from "./Helpers/Context";

const MapComponent = () => {

    const { map, Layers } = useContext(AppContext);
    const mapRef = useRef();


    useEffect(() => {


        const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-79.347015, 43.651070],
            zoom: 13
        })


        Layers.map((item) => map.add(item))


        return () => {
            if (view) {
                // destroy the map view
                //  view.destroy()
            }
        };
    }, [])

    const mapStyle = {
        width: '70%',
        height: '100%',
        position: 'absolute',
        right: 0,
    };

    return (
        <div className="map-container" ref={mapRef} style={mapStyle} />
    );
};

export default MapComponent;
