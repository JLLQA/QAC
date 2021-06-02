import Navbar from "../Navbar/Navbar";

const ListingPage = (props) => {
    const {foo} = props.location.state;
    
    return (
        <div>
            <Navbar />
            <h1>Welcome</h1>
        </div>
    );
}

export default ListingPage;