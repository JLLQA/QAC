import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from 'reactstrap';
import StarRating from './StarRating';
import ReviewTableView from "./ReviewDisplay/ReviewTableView";

const RatingPage = () => {
    document.title = "Movie Reviews"

    const [rating, setRating] = useState(null);
    const [usersName, setUsersName] = useState("");
    const [reviewBody, setReviewBody] = useState("");
    const [incomingData, setIncomingData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [refresh,setRefresh] = useState(false);

    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:5000/movies/find/${id}`,
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then((resp) => {
            console.log(resp.data.reviews);
            setIncomingData(resp.data.reviews);
            setIsLoaded(true);
        }).catch((err) => {
            console.log(err.message);
            setIsLoaded(true);
        })
    }, [refresh]);

    const { id } = useParams();

    const submitReviewAxios = (e) => {
        e.preventDefault();

        console.log(usersName, rating, reviewBody);

        const reviewData = {
            critic: usersName,
            stars: rating,
            review: reviewBody,
        }

        console.log(reviewData);

        axios.patch(`http://localhost:5000/movies/review/${id}`, reviewData)
            .then((response => {
                console.log(response);
                setRefresh((c)=>!c);
            }))
            .catch((err => {
                console.log(err);
            }))
    };

    if (isLoaded) {
        return (
            <>
                <div id="dropped-box" className="container-fluid">
                    <Container>
                        <h1>REVIEWS</h1>
                        <form align="center">
                            <h3>Let us know what you thought!</h3>
                            <br />
                            <label>Username</label>
                            <br />
                            <input id="Review" type="text" placeholder="Enter your display name here" name="usersName" onChange={(e) => setUsersName(e.target.value)} />
                            <br />
                            <label>Star Rating</label>
                            <br />
                            <StarRating star={rating} starHandler={setRating} />
                            {console.log(incomingData)}
                            <br />
                            <label>Review</label>
                            <br />
                            <input id="Review" type="text" placeholder="Enter review here" name="reviewBody" onChange={(e) => setReviewBody(e.target.value)} />
                            <br />
                            <button id="submitButton" type="submit" onClick={submitReviewAxios}>Submit</button>
                            <br/>
                            <button id="resetButton" type="reset"> Reset Fields </button>
                        </form>
                        <br />
                        <div id="dropped-box" className="container-fluid">
                            <ReviewTableView data={incomingData} />
                        </div>
                    </Container>
                </div>
            </>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default RatingPage;