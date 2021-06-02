import Navbar from "../Navbar/Navbar";

const ListingPage = (props) => {
    console.log("about", props.location.directorProps);
    
    return (
        <div>
            <Navbar />
            <h1>Welcome</h1>
        </div>
    );
}

export default ListingPage;