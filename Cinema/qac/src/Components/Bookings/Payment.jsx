import Navbar from '../Multipage/Navbar/Navbar';

const Payment = ({data}) => {


    return (
        <>
            <Navbar />
            <div id="dropped-box" className="container-fluid">
                <h1>Payment</h1>
                {console.log(data)};
            </div>
        </>
    );
}

export default Payment;