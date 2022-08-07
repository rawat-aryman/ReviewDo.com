// import {motion, AnimatePresence} from 'framer-motion';
import { useContext } from 'react';
import React from 'react';
import Feedbackitem from './Feedbackitem';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {
    
    const { feedback } = useContext(FeedbackContext);


    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => {
                return <Feedbackitem key = {item.id} item = {item} />
            })}
        </div>
    )
    
}


export default FeedbackList;