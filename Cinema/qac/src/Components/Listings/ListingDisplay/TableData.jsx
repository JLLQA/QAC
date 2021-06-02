import { Link } from "react-router-dom"
const TableData = ({ object }) => {



    return (
        <>
            <td>
                <div className="img-container">
                    <Link to={{
                        pathname: "/moviedetails",
                        directorProps: { name: 'Jim' }
                    }}>
                        <img src={object.Poster} alt={object.Title} />
                        <div className="img-overlay" >
                            <div className="img-text">{object.Title}</div>
                        </div>
                    </Link>
                </div>
            </td>
        </>
    );
}

export default TableData;