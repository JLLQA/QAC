
const ReviewTableData = ({object}) => {
    return (
        <>
        <td>
            <div>
                <p>Name:{object.usersName} : Review:{object.reviewBody}</p>
            </div>
        </td>
        </>
    )
}

export default ReviewTableData;