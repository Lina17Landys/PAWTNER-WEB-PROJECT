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

interface PinData {
  coordinates: [number, number];
  petName: string;
  species: string;
  lastSeen: string;
  address: string;
  notes: string;
}

interface MapComponentProps {
  selectedPin: PinData | null;
  setSelectedPin: React.Dispatch<React.SetStateAction<PinData | null>>;
  pins: PinData[];
  setPins: React.Dispatch<React.SetStateAction<PinData[]>>;
}

const MapComponent: React.FC<MapComponentProps> = ({ selectedPin, setSelectedPin, pins, setPins }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [vectorSource] = useState(new VectorSource());

  useEffect(() => {
    if (mapRef.current && !map) {
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
        let clickedOnFeature = false;

        mapObject.forEachFeatureAtPixel(event.pixel, (feature) => {
          const pinCoordinates = feature.getGeometry()?.getCoordinates();
          const existingPin = pins.find(
            (pin) =>
              pin.coordinates[0] === pinCoordinates[0] &&
              pin.coordinates[1] === pinCoordinates[1]
          );

          if (existingPin) {
            setSelectedPin(existingPin);
            clickedOnFeature = true;
          }
        });

        if (!clickedOnFeature) {
          const coordinate = event.coordinate;
          setSelectedPin({
            coordinates: [coordinate[0], coordinate[1]],
            petName: '',
            species: '',
            lastSeen: '',
            address: '',
            notes: '',
          });
        }
      });

      setMap(mapObject);
    }
  }, [map, pins, setSelectedPin, vectorSource]);

  useEffect(() => {
    vectorSource.clear(); 

    pins.forEach((pin) => {
      const feature = new Feature({
        geometry: new Point(pin.coordinates),
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 1],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            src: 'https://openlayers.org/en/latest/examples/data/icon.png',
            scale: 1, 
          }),
        })
      );

      vectorSource.addFeature(feature);
    });
  }, [pins, vectorSource]);

  return <div ref={mapRef} className="map-container" />;
};

export default MapComponent;