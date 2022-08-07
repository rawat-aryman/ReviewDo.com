// import React from 'react';
// import Card from './shared/Card';
// import Buttonf from './shared/Buttonf';
// import RatingSelect from './RatingSelect';
// import {useState , useContext , useEffect} from 'react';
// import FeedbackContext from '../context/FeedbackContext';

// function FeedbackForm() {

//     const [rating, setRating] = useState();
//     const [text, setText] = useState('');
//     const [btnDisabled, setBtnDisabled] = useState(true);
//     const [message, setMessage] = useState('');

//     const {addFeedback , feedbackEdit } = useContext(FeedbackContext);

//     useEffect(() => {
//         setBtnDisabled(false);
//         setText(feedbackEdit.item.text);
//         setRating(feedbackEdit.item.rating);
//     }, [feedbackEdit]);

//     const handleText = (e) => {
//         if(text === ''){
//             setBtnDisabled(true);
//             setMessage(null);
//         } else if(text !== '' && text.trim().length < 10){
//             setBtnDisabled(true);
//             setMessage('text must be atleast of 10 characters');
//         }
//         else{
//             setBtnDisabled(false);
//             setMessage(null);
//         }

//         setText(e.target.value);
//     };

//     const disMessage = (
//         <div className="message">
//             {message}
//         </div>
//     )

//     const selectedRating = (rating => {
//         // console.log('hello');
//         setRating(rating);
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(text === undefined) {
//             {console.log(text)};
//         }
//          else if(text.trim().length >= 10){
//             const newFeedback = {
//                 text,
//                 rating
//             };

//             if(feedbackEdit.edit === true){
//                 updateFeedback(feedbackEdit.item.id, newFeedback);
//             }
//             // {console.log(newFeedback)};
//             else addFeedback(newFeedback);

//             setBtnDisabled(true) // 👈  add this line to reset disabled
//             setRating(10) //👈 add this line to set rating back to 10
//             setText('')
//         }
//         setText('');
        
//     }

//     return (
//         <Card>
//             <form onSubmit={handleSubmit}>
//                 <h2>How would you like to rate the Feedback UI?</h2>
//                 {/* todo -- rating component */}
//                 <RatingSelect select = {(rating) => selectedRating(rating)} />
//                 <div className="input-group">
//                     <input type="text" placeholder='Write your review' onChange={handleText} value={text} />
//                     <Buttonf type = 'submit'  isDisabled = {btnDisabled}>
//                         Send
//                     </Buttonf>
//                 </div>
//                 {message && disMessage}
//             </form>
//         </Card>
//     )
// }

// export default FeedbackForm;

import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Buttonf from './shared/Buttonf'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  // NOTE: This should be checking input value not state as state won't be the updated value until the next render of the component

  // prettier-ignore
  const handleTextChange = ({ target: { value } }) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
      
  // prettier-ignore
    } else if (value.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      // NOTE: reset to default state after submission
      setBtnDisabled(true) // 👈  add this line to reset disabled
      setRating(10) //👈 add this line to set rating back to 10
      setText('')
    }
  }

  // NOTE: pass selected to RatingSelect so we don't need local duplicate state
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Buttonf type='submit' isDisabled={btnDisabled}>
            Send
          </Buttonf>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm