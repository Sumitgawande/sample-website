import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
/**
* @author
* @function MapG
**/

const MapG = (props) => {

    const mapStyles = {
        width: '50%',
        height: '70%',
    };

    return (
        <div>
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                <Marker position={{ lat: 48.00, lng: -122.00 }} />
            </Map>

        </div>
    )

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHiMpvtBNrkwDIfO7N9ij9E6pC9noAogc'
})(MapG)

