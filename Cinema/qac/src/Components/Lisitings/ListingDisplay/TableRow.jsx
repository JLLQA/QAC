import TableData from "./TableData"

const TableRow = ({objects}) => {

    return (
        <>
            {objects.map((object, i) => (
                <TableData key={i} object={object}/>
            ))}
        </>
    );
}

export default TableRow;