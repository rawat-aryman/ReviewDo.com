import { createContext } from "react";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackData from "../data/FeedbackData";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback , setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    const addFeedback = (newFeedback) => {
        // newFeedback.id = uuidv4();
        // setFeedback([newFeedback, ...feedback]);
        console.log('hello world');
    };

    const deleteFeedback = (id) => {
        if(window.confirm("You surely want to delete your valuable feedback ??")){
            setFeedback(feedback.filter((item) => item.id != id));
        }
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit : true
        })
    }

    // const updateFeedback = (id, upditem) => {
    //     setFeedback(feedback.map( (item ) => {
    //         if(item.id === id){
    //             return upditem;
    //         }
    //         else return item;
    //     }))
    // };

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            // updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;