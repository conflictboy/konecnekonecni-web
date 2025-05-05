'use client'

import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

export default function GoogleMap(
    {defaultCenterLat, defaultCenterLng, markerLat, markerLng}:
    { defaultCenterLat: number, defaultCenterLng: number, markerLat: number, markerLng: number }
) {
    const GoogleMapApiKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!GoogleMapApiKey) return;

    return (
        <APIProvider apiKey={GoogleMapApiKey}>
            <Map
                style={{height: '300px'}}
                defaultCenter={{lat: defaultCenterLat, lng: defaultCenterLng}}
                defaultZoom={13}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            >
                <Marker position={{lat: markerLat, lng: markerLng}}/>
            </Map>
        </APIProvider>
    )
}