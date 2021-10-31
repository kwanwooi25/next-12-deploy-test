import loadjs from 'loadjs';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

const useNaverMap = (mapId: string) => {
  const map = useRef();

  useEffect(() => {
    const mapContainer = document.getElementById(mapId);
    if (mapContainer) {
      loadjs('https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=a8af1iim76', () => {
        map.current = new window.naver.maps.Map(mapId, {
          center: new window.naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 10,
        });
      });
    }
  }, [mapId]);

  return { map: map.current };
};

export { useNaverMap as default };
