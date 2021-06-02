import { useState } from 'react';

const TableData = ({ object }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <td>
                <div className="img-container">
                    <img src={object.Poster} alt="" onClick={toggle} />
                    <div className="img-overlay" onClick={toggle}>
                        <div className="img-text">{object.name}</div>
                    </div>
                </div>
            </td>
        </>
    );
}

export default TableData;