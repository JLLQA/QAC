import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {
    // const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const {star, starHandler} = props

    return(
        <div>
            {[...Array(5)].map((stars, i) => {
                const ratingValue = i + 1;

                return( 
                <label>
                    <input type="radio" name="rating" value={star} onClick={starHandler}/>
                    <FaStar className="star" color={ratingValue <= (hover || star) ? "#ffc107" : "#e4e5e9"} size={50}
                    onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=>setHover(null)} />
                </label>
                )
            })}
            <p>You're rating this film {star} stars!. Tell us why...</p>
        </div>
    )

}

export default StarRating;