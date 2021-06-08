import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {
    const [hover, setHover] = useState(null);
    const {star, starHandler} = props

    return(
        <div>
            {[...Array(5)].map((stars, i) => {
                const ratingValue = i + 1;

                return( 
                <label>
                    <input key={i} type="radio" name="rating" value={ratingValue} onClick={() => starHandler(ratingValue)}/>
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