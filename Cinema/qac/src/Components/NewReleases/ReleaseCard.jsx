const ReleaseCard = ({release}) => {
console.log(release);
    return(
        <div style={{ backgroundColor: "blue", marginBottom: "1%", marginTop: "1%", marginRight: "1%", marginLeft: "1%" }}>
                    <div>
                        <img width="100" height="100" src={release.poster} alt={release.title} />
                        <p>{release.title}</p>
                        <p>{release.releasedate}</p>
                    </div>
                </div>
    )
}
export default ReleaseCard;