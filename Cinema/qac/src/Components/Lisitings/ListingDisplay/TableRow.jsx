import TableData from "./TableData";

const TableRow = ({ objects }) => {

    return (
        <>
            <td>
                <div className="img-container">
                    <img src={objects.Poster} alt=""/>
                    <div className="img-overlay">
                        <div className="img-text">{objects.Title}</div>
                    </div>
                </div>
            </td>
        </>
    );
}

export default TableRow;