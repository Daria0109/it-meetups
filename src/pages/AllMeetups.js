import {useState, useEffect} from 'react'
import {MeetupsList} from "../components/MeetupsList/MeetupsList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];


export const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState([])

  useEffect(() => {
    fetch('https://meetups-react-f252e-default-rtdb.firebaseio.com/meetups.json')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        setState(meetups);
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return <div>
    <h1>All Meetups</h1>
    <MeetupsList meetups={state}/>
  </div>
}