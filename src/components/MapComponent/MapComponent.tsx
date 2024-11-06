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
import { click } from 'ol/events/condition';
import Select from 'ol/interaction/Select';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [vectorSource, setVectorSource] = useState<VectorSource | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      // Crear la fuente vectorial para los pines (marcadores)
      const source = new VectorSource();

      // Crear el mapa
      const mapObject = new Map({
        target: mapRef.current,
        layers: [
          // Capa base de OpenStreetMap
          new TileLayer({
            source: new OSM(),
          }),
          // Capa para los pines
          new VectorLayer({
            source: source,
          }),
        ],
        view: new View({
          center: fromLonLat([-76.5320, 3.4516]), // Coordenadas de Cali, Colombia
          zoom: 13,
        }),
      });

      // Agregar interacción de clic para agregar pines
      mapObject.on('click', (event) => {
        const coordinate = event.coordinate; // Obtener coordenadas del clic
        const feature = new Feature({
          geometry: new Point(coordinate),
        });

        // Estilo personalizado del pin (marcador)
        feature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: 'https://openlayers.org/en/latest/examples/data/icon.png', // URL de ícono personalizado
            }),
          })
        );

        source.addFeature(feature); // Añadir el pin a la capa
      });

      setMap(mapObject);
      setVectorSource(source);
    }
  }, [map]);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;
