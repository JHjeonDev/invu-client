import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* ✅ 카카오맵 API */}
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=728537f86168978028abe62c120e8b77&libraries=services`}
          strategy="beforeInteractive"
        />

        {/* ✅ 네이버 지도 API */}
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nmldwkqssf`}
          strategy="beforeInteractive"
        />

        {/* ✅ TMap API */}
        <Script
          src={`https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=CnztcxUQcF7Ed5nfa9rSu8AaFxZ5RlRD13Maqpz6`}
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}