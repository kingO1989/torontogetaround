
import Menu from './Components/Menu';
import MapComponent from './Components/MapComponent';
import AppContext from './Components/Helpers/Context';
import React, { useEffect, useState, useRef } from 'react'
import DummyMap from './Components/DummyMapComponent';


function App() {

  const [updatedLayers, setUpdatedLayers] = useState();

  function addFeatureLayer() {

  }

  function removeFeatureLayer() {

  }

  let layersContext = {
    addFeatureLayer: addFeatureLayer,
    removeFeatureLayer: removeFeatureLayer,
    updatedLayers: updatedLayers,
    setUpdatedLayers: setUpdatedLayers

  }
  //    <MapComponent />
  return (
    <div className="App">
      <AppContext.Provider value={layersContext}>
        <Menu />
        <DummyMap />
      </AppContext.Provider>
    </div>
  );
}

export default App;
