import axios from 'axios';
import StarRating from './StarRating';
import {useEffect, useState} from 'react';
import Navbar from '../Multipage/Navbar/Navbar';

const RatingPage = () => {

    const [usersName, setUsersName] = useState("");
    const [reviewBody, setReviewBody] = useState("");

    const [incomingData, setIncomingData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getReviews = () => {
        useEffect(() => {
        axios({
            method: "Get",
            url: "http://localhost:5000/Reviews",
            headers: { "Access-Control-Allow-Origin" : "*"}
        }).then((resp) => {
            console.log(resp);
            setIncomingData(resp.data);
            setIsLoaded(true);
        }).catch((err) => {
            console.log(err.message);
            setIsLoaded(true);
        })
        }, []);
    }

    const submitReviewAxios = (e) => {
        e.preventDefault();
        
        const reviewData = {
            name: usersName,
            review: reviewBody
        }

        axios.post("http://localhost:5000/Reviews", reviewData)
            .then(response => {
                console.log(response);
            })
        };

        return(
            <>
            <div>
                <Navbar />
            </div>
            <h1>Let us know what you thought!</h1>
            <h2>Film title</h2>
            <StarRating/>
            <form onSubmit={submitReview}>
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
            </form>

            <button onClick={getReviews}>Show Reviews</button>
            
            </>
        )

        //add in if statement that will be set to true when display reviews is shown and will show the table with reviews in.

        }


export default RatingPage;