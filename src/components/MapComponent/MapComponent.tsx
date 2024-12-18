import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';

import './MapComponent.css';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const vectorSource = new VectorSource(); 

      const mapObject = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: vectorSource,
          }),
        ],
        view: new View({
          center: fromLonLat([-76.5320, 3.4516]), 
          zoom: 13,
        }),
      });

      mapObject.on('click', (event) => {
        const coordinate = event.coordinate; 
        const feature = new Feature({
          geometry: new Point(coordinate),
        });

        feature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: 'https://openlayers.org/en/latest/examples/data/icon.png', 
            }),
          })
        );

        vectorSource.addFeature(feature); 
      });

      setMap(mapObject);
    }
  }, [map]);

  return <div ref={mapRef} className="map-container" />;
};

export default MapComponent;
