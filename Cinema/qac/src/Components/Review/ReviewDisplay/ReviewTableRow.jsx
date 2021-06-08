import ReviewTableData from './ReviewTableData';

const ReviewTableRow = ({data}) => {
    console.log(data);
    return (
        <>
            <td>
                <div>
                    <p>Name:{data.critic} : Review:{data.review}</p>
                </div>
            </td>
        </>
    );

}

export default ReviewTableRow;