const ReviewTableRow = ({data}) => {
    console.log(data);
    return (
        <>
            <td>
                <div>
                    <p>Name:{data.critic}, Star Rating: {data.stars}, Review:{data.review}</p>
                </div>
            </td>
        </>
    );

}

export default ReviewTableRow;