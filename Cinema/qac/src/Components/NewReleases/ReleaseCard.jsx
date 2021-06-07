import { useState } from "react";
import ReleaseModal from "./ReleaseModal";

const ReleaseCard = ({ release }) => {
    console.log(release);

    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="nav-links" style={{ marginBottom: "1%", marginTop: "1%", marginRight: "1%", marginLeft: "1%", border: "2px solid #ffccff", borderRadius: "5px", width:"90%" }}>
            <div onClick={() => setModalShow(true)} style={{ cursor:"pointer"}}>
                <h3>{release.title}</h3>
                <img src={release.poster} alt={release.title} />
                <p>Expected Release Date: {release.releasedate}</p>
            </div>
            <ReleaseModal show={modalShow} onHide={() => setModalShow(false)} data={release} />
        </div>
    )
}
export default ReleaseCard;