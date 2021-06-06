import axios from 'axios';
import StarRating from './StarRating';
import {useEffect, useState} from 'react';


const Discussion2 = () => {

    const [usersName, setUsersName] = useState("");
    const [reviewBody, setReviewBody] = useState("");


    const submitReview = (e) => {
        e.preventDefault();
        const dataSend = JSON.stringify({usersName, reviewBody});
        setUsersName("");
        setReviewBody("");
    }

    return(
            <>
            <div>
                <NavBar />
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
                <button type="submit">Submit</button>
            </form>

            <p> 
                Name:{usersName}
                <br/>
                Review:{reviewBody}
            </p>

            </>
        )
    }


export default Discussion2;