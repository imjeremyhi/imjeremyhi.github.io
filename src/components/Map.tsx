import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

type Props = {
    center: {
        lat: number,
        lng: number,
    },
    zoom: number,
};

export class Map extends Component<Props> {
    static defaultProps = {
        center: {
            lat: -33.87,
            lng: 151.21,
        },
        zoom: 11,
    };

    renderMarkers = (map: any, maps: any) => {
        let marker = new maps.Marker(
            {
                position: { lat: this.props.center.lat, lng: this.props.center.lng },
                map,
                title: 'Hello World!'
            }
        );
        return marker;
    };

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDVVuiFRsGxb3A57LQ6rCxpcCV6BR-4bKM' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
            />
        );
    }
}
