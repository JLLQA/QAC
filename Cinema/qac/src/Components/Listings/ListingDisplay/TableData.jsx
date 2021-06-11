import { Link } from "react-router-dom"
const TableData = ({ object }) => {
    console.log("table data",object);
    return (
        <>
            <td>
                <div className="img-container">
                    <Link to={{
                        pathname: `/moviedetails/${object.id}`
                    }}>
                        <img src={object.poster} alt={object.title} />
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