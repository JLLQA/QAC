import axios from 'axios';
import StarRating from './StarRating';
import {useEffect, useState} from 'react';
import Navbar from '../Multipage/Navbar/Navbar';
import ReviewTableView from "./ReviewDisplay/ReviewTableView";
import { useParams } from 'react-router';
import { Container } from 'reactstrap';

const RatingPage = () => {

    const [rating, setRating] = useState(null);

    const [usersName, setUsersName] = useState("");
    const [reviewBody, setReviewBody] = useState("");

    const [incomingData, setIncomingData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:5000/movies/find/${id}`,
            headers: { "Access-Control-Allow-Origin" : "*"}
        }).then((resp) => {
            console.log(resp.data.reviews);
            setIncomingData(resp.data.reviews);
            setIsLoaded(true);
        }).catch((err) => {
            console.log(err.message);
            setIsLoaded(true);
        })
        }, []);

    const{id} = useParams();

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

            }))
            .catch((err => {
                console.log(err);
            }))
        };

        if (isLoaded) {
        return(
        <>
        <div>
            <Navbar />
        </div>
        <Container>
        <h1>Let us know what you thought!</h1>
        <StarRating star={rating} starHandler={setRating}/>
        {console.log(incomingData)}
        <form>
            <label>Username</label>
            <br/>
            <input id="Name" type="text" name="usersName" onChange={(e) => setUsersName(e.target.value)}/>
            <br/>
            <br/>
            <label for="reviewBody">Review</label>
            <br/>
            <input id="reviewBody" type="text" name="reviewBody" onChange={(e) => setReviewBody(e.target.value)}/>
            <br/>
            <button type="submit" onClick={submitReviewAxios}>Submit</button>
            <button type="reset"> Reset Fields </button>
        </form>
        </Container>

        <ReviewTableView data={incomingData}/>

        </>
        )} else {
            return (
                <h1>Loading...</h1>
            )
        }

        }



export default RatingPage;