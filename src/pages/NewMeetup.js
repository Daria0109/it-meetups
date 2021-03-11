import {useHistory} from 'react-router-dom';
import {NewMeetupForm} from "../components/newMeetupForm/NewMeetupForm";

export const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = (data) => {
    fetch('https://meetups-react-f252e-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        history.replace('/')
    })
  }

  return <section>
    <h1>New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>
}