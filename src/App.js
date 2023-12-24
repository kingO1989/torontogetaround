
import Map from '@arcgis/core/Map'
import Menu from './Components/Menu';
import MapComponent from './Components/MapComponent';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import AppContext from './Components/Helpers/Context';
import React, { lazy, useEffect, useState, useRef } from 'react'
import DummyMap from './Components/DummyMapComponent';
import esriConfig from '@arcgis/core/config'
esriConfig.assetsPath = "./assets";
esriConfig.apiKey = "AAPK18e830016dbd40b0af6745daf1b6953exTFDCUwpr9qIlV-BFCsg103Ue7W02PrSQAiA5dpNy2siucAlXxqnjp0pCKggNQeZ";

function App() {


  const mapBaseLayer = new VectorTileLayer({
    url: "https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer"
  });

  const map = new Map({
    basemap: {
      baseLayers: [mapBaseLayer]
    }

  })

  const communityhousing = new FeatureLayer({
    url: "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Community_Housing_Data/FeatureServer",


  })


  const renewableEnergy = new FeatureLayer({
    url: "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Renewable_Energy_Installations/FeatureServer"


  })




  const DrinkingWaterLoc = new FeatureLayer({
    url: "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Drinking_Water_Location_Data/FeatureServer",


  })


  const RenewableEnergyInstallations = new FeatureLayer({
    url: "https://services6.arcgis.com/ZRG7z6nmxWzipbfs/arcgis/rest/services/Renewable_Energy_Installations/FeatureServer"


  })

  //Group Layers to an array
  const Layers = [communityhousing, renewableEnergy, DrinkingWaterLoc, RenewableEnergyInstallations]

  //Add and Remove Layer function
  function addFeatureLayer(layer) {
    layer.visible = true;
  }

  function removeFeatureLayer(layer) {

    layer.visible = false;
  }

  let layersContext = {
    Layers: Layers,
    communityhousing: communityhousing,
    map: map,
    addFeatureLayer: addFeatureLayer,
    removeFeatureLayer: removeFeatureLayer,

  }
  // <DummyMap />    
  return (
    <div className="App">
      <AppContext.Provider value={layersContext}>
        <Menu />
        <MapComponent />

      </AppContext.Provider>
    </div>
  );
}

export default App;
