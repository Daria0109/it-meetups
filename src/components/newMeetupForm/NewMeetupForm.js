import {useRef} from 'react';
import {Card} from "../ui/Card/Card";
import classes from './NewMeetupForm.module.css'

export const NewMeetupForm = (props) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value

    const meetupForm = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }
    props.onAddMeetup(meetupForm)
  }

  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id='title' ref={titleRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id='image' ref={imageRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id='address' ref={addressRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" required ref={descriptionRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
}