import React, { useEffect, useRef, useState } from "react";

// Note: In a real React app, you'd import these:
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(77.209);
  const [lat] = useState(28.6139);
  const [zoom] = useState(11);

  useEffect(() => {
    // Load Mapbox GL JS from CDN
    const loadMapbox = async () => {
      if (map.current) return;

      // Load CSS
      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js';
      document.head.appendChild(script);

      script.onload = () => {
        const mapboxgl = window.mapboxgl;
        
        mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZG0xcnB1dGluIiwiYSI6ImNtazBhbTZnYzZkczMzZ3F4MW9heWMyYm8ifQ.KyfbEBFbq_nBjODevToCUg';

        if (!mapContainer.current) return;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/satellite-streets-v12',
          center: [lng, lat],
          zoom: zoom,
        });

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Add a marker at center
        new mapboxgl.Marker({ color: '#FF4757' })
          .setLngLat([lng, lat])
          .setPopup(new mapboxgl.Popup().setHTML('<h3>Delhi, India</h3>'))
          .addTo(map.current);

        // Add user location control
        map.current.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
          }),
          'top-right'
        );
      };
    };

    loadMapbox();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div 
        ref={mapContainer} 
        style={{ 
          width: '100%', 
          height: '500px',
          position: 'absolute',
          top: 0,
          left: 0
        }} 
      />
      
      {/* Info overlay */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '8px',
        fontSize: '14px',
        fontFamily: 'monospace',
        zIndex: 1
      }}>
        <div>Longitude: {lng.toFixed(4)}</div>
        <div>Latitude: {lat.toFixed(4)}</div>
        <div>Zoom: {zoom}</div>
      </div>
    </div>
  );
}