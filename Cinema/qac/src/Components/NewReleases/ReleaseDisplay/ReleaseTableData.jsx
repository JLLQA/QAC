import { useState } from "react";
import ReleaseModal from "../ReleaseModal/ReleaseModal";

const ReleaseTableData = ({ object }) => {
    // console.log("this");
    // console.log(object);

    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <td>
                <div className="img-container">
                        <div onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
                            <img src={object.poster} alt={object.title} />
                            <div className="img-overlay" >
                                <div className="img-text">{object.title}</div>
                            </div>
                        </div>
                            <ReleaseModal show={modalShow} onHide={() => setModalShow(false)} data={object} />
                
                </div>
            </td>
        </>
    );
}

export default ReleaseTableData;