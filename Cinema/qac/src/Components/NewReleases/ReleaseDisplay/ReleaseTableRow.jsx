import ReleaseTableData from "./ReleaseTableData";

const ReleaseTableRow = ({ objects, query }) => {
    console.log(objects);

    if (query.length > 0) {
        return (
            <>
                {objects
                .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
                .map((two, i) => (
                    <ReleaseTableData key={i} object={two} />
                ))}
            </>
        );
    } else {
        return (
            <>
                {objects.map((two, i) => (
                    <ReleaseTableData key={i} object={two} />
                ))}
            </>
        );
    }
}

export default ReleaseTableRow;