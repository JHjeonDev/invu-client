'use client';

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const mapWrapperClass = twMerge(
  "flex flex-col gap-4",
  "w-full",
  "h-auto"
);

const mapContainerClass = twMerge(
  "w-full h-[300px] border rounded-lg overflow-hidden"
);

declare global {
  interface Window {
    kakao: any;
    naver: any;
    Tmapv2: any;
  }
}

type MapProps = {
  location: string;
};

export default function Map({ location }: MapProps) {
  const [activeMap, setActiveMap] = useState<'kakao' | 'naver' | 'tmap' | null>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number, lon: number } | null>(null);
  
  const kakaoMapRef = useRef<HTMLDivElement>(null);
  const naverMapRef = useRef<HTMLDivElement>(null);
  const tmapRef = useRef<HTMLDivElement>(null);

  const fetchCoordinates = (mapType: 'kakao' | 'naver' | 'tmap') => {
    if (mapType === 'kakao') {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(location, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setCoordinates({ lat: result[0].y, lon: result[0].x });
        }
      });
    } else if (mapType === 'naver') {
      const geocoder = new window.naver.maps.Service();
      geocoder.geocode({ query: location }, (status: any, response: any) => {
        if (status === window.naver.maps.Service.Status.OK) {
          const { x, y } = response.v2.addresses[0];
          setCoordinates({ lat: y, lon: x });
        }
      });
    } else if (mapType === 'tmap') {
      fetch(`https://apis.openapi.sk.com/tmap/geo/fullAddrGeo?version=1&format=json&appKey=CnztcxUQcF7Ed5nfa9rSu8AaFxZ5RlRD13Maqpz6&address=${location}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.coordinateInfo.coordinate.length > 0) {
            const { lon, lat } = data.coordinateInfo.coordinate[0];
            setCoordinates({ lat, lon });
          }
        });
    }
  };

  useEffect(() => {
    if (!coordinates) return;

    if (activeMap === 'kakao') {
      initKakaoMap(coordinates);
    } else if (activeMap === 'naver') {
      initNaverMap(coordinates);
    } else if (activeMap === 'tmap') {
      initTMap(coordinates);
    }
  }, [activeMap, coordinates]);

  // ✅ 카카오맵 초기화
  const initKakaoMap = ({ lat, lon }: { lat: number, lon: number }) => {
    const coords = new window.kakao.maps.LatLng(lat, lon);
    const map = new window.kakao.maps.Map(kakaoMapRef.current, { center: coords, level: 3 });

    new window.kakao.maps.Marker({ position: coords, map: map });

    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  };

  // ✅ 네이버 지도 초기화
  const initNaverMap = ({ lat, lon }: { lat: number, lon: number }) => {
    const coords = new window.naver.maps.LatLng(lat, lon);
    const map = new window.naver.maps.Map(naverMapRef.current, {
      center: coords,
      zoom: 15,
    });

    new window.naver.maps.Marker({
      position: coords,
      map: map,
    });
  };

  // ✅ TMap 초기화
  const initTMap = ({ lat, lon }: { lat: number, lon: number }) => {
    const coords = new window.Tmapv2.LatLng(lat, lon);
    const map = new window.Tmapv2.Map(tmapRef.current, {
      center: coords,
      zoom: 15,
    });

    new window.Tmapv2.Marker({
      position: coords,
      map: map,
    });
  };

  return (
    <div className={mapWrapperClass}>
      <button 
        type="button" 
        style={{ width: '50%', padding: '10px', color: '#817b7b', fontSize: '14px' }} 
        className="button"
        onClick={() => {
          setActiveMap('kakao');
          fetchCoordinates('kakao');
        }}
      >
        <svg width="16" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1366 10.4225L7.6878 4H4V16H7.86341V9.57747L12.3122 16H16V4H12.1366V10.4225Z" fill="#817b7b"></path>
        </svg>
        <div className="button__text">카카오 지도</div>
      </button>

      <button 
        type="button" 
        style={{ width: '50%', padding: '10px', color: '#817b7b', fontSize: '14px' }} 
        className="button"
        onClick={() => {
          setActiveMap('naver');
          fetchCoordinates('naver');
        }}
      >
        <svg width="16" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1366 10.4225L7.6878 4H4V16H7.86341V9.57747L12.3122 16H16V4H12.1366V10.4225Z" fill="#817b7b"></path>
        </svg>
        <div className="button__text">네이버 지도</div>
      </button>

      <button 
        type="button" 
        style={{ width: '50%', padding: '10px', color: '#817b7b', fontSize: '14px' }} 
        className="button"
        onClick={() => {
          setActiveMap('tmap');
          fetchCoordinates('tmap');
        }}
      >
        <svg width="16" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1366 10.4225L7.6878 4H4V16H7.86341V9.57747L12.3122 16H16V4H12.1366V10.4225Z" fill="#817b7b"></path>
        </svg>
        <div className="button__text">TMap</div>
      </button>

      {activeMap === 'kakao' && (
        <>
          <div className="text-lg font-bold text-center">카카오맵</div>
          <div ref={kakaoMapRef} className={mapContainerClass} />
        </>
      )}

      {activeMap === 'naver' && (
        <>
          <div className="text-lg font-bold text-center">네이버 지도</div>
          <div ref={naverMapRef} className={mapContainerClass} />
        </>
      )}

      {activeMap === 'tmap' && (
        <>
          <div className="text-lg font-bold text-center">TMap</div>
          <div ref={tmapRef} className={mapContainerClass} />
        </>
      )}
    </div>
  );
}