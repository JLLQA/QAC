import TableData from "./TableData";

const TableRow = ({ objects, query }) => {

    console.log(query);

    if (query.length > 0) {
        return (
            <>
                {objects
                .filter(movie => movie.Title.toLowerCase().includes(query.toLowerCase()))
                .map((object, i) => (
                    <TableData key={i} object={object} />
                ))}
            </>
        );
    } else {
        return (
            <>
                {objects.map((object, i) => (
                    <TableData key={i} object={object} />
                ))}
            </>
        );
    }
}

export default TableRow;