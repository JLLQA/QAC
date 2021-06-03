import GoogleMapReact from "google-map-react";

const Map = () => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <div style={{ height: '40vh', width: '50%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDgxqUYRNs1Zyd7FXeovnBzHrFmzB-7Q0I" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )

}

export default Map;