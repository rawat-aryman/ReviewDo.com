import React from 'react';
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext);

    // calculate average rating:
    let avgRating = feedback.reduce((acc,cur) => {
        return acc + cur.rating;
    },0);
    avgRating = avgRating / feedback.length;
    // console.log(avgRating);
    avgRating = avgRating.toFixed(2);

    return (
        <div className="feedback-stats">
            <h4>({feedback.length}) Reviews</h4>
            <h4>Average Rating : {feedback.length !== 0 ? avgRating : 0}</h4>
        </div>
    )
}

export default FeedbackStats;