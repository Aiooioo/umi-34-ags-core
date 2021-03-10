import React, { useRef, useEffect } from 'react';
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import styles from './index.less';

export default function IndexPage() {
  const domRef = useRef();

  useEffect(() => {
    var map = new EsriMap({
      basemap: 'osm',
    });

    var view = new MapView({
      map,
      container: domRef.current,
    });
  }, []);

  return <div ref={domRef} className={styles.root} />;
}
