import GoogleMapReact from "google-map-react";
import { Button } from "reactstrap";

const ContactMap = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 53.4762187236174,
            lng: -2.2422500459209496
        },
        zoom: 11
    };

    return (

        <div className="container" align="center">
            <h2 >Where We Are</h2>
            <div className="row justify-content-md-center">
                <div className="col-md-auto" >
                    <h4>Our Address</h4>
                    <p>8, St James's Bldg</p>
                    <p>61-95 Oxford St</p>
                    <p>Manchester</p>
                    <p>M1 6FQ</p>
                    <p>United Kingdom</p>
                    <Button type="button" onClick={(e) => {e.preventDefault();
                            window.location.href = '';
                        }}>Click for more Location Info</Button>
                </div>
                <div className="col col-lg-6" style={{ height: '40vh', width: '50%' }}>
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
            </div>
        </div>
    )
}

export default ContactMap;