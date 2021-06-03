import GoogleMapReact from "google-map-react";

const Map = () => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 53.4762187236174,
            lng: -2.2422500459209496
        },
        zoom: 11
        
    };

    return (
        <div style={{ height: '70vh', width: '50%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDgxqUYRNs1Zyd7FXeovnBzHrFmzB-7Q0I" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent 
                    lat={53.4762187236174}
                    lng={-2.2422500459209496}
                    text="QA Cinema"
                />
            </GoogleMapReact>
        </div>
    )

}

export default Map;