
const TableData = ({ object }) => {

    return (
        <>
            <td>
                <div className="img-container">
                    <img src={object.Poster} alt=""/>
                    <div className="img-overlay">
                        <div className="img-text">{object.Title}</div>
                    </div>
                </div>
            </td>
        </>
    );
}

export default TableData;