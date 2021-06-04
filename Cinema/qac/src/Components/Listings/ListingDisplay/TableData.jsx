import { Link } from "react-router-dom"
const TableData = ({ object }) => {
    console.log("table data",object);
    return (
        <>
            <td>
                <div className="img-container">
                    <Link to={{
                        pathname: `/moviedetails/${object.title}`
                    }}>
                        <img src={object.image} alt={object.title} />
                        <div className="img-overlay" >
                            <div className="img-text">{object.title}</div>
                        </div>
                    </Link>
                </div>
            </td>
        </>
    );
}

export default TableData;